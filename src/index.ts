import Koa from "koa";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";
import { createCanvas } from "canvas";
import { generateQRCode } from "./logic/generate";
import { QRCodeGeneratorState } from "./logic/types";

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

router.post("/qrcode", async (ctx) => {
  const outCanvas = createCanvas(500, 500);

  const params = ctx.request.body as QRCodeGeneratorState;

  // @ts-expect-error
  await generateQRCode(outCanvas, params);

  const base64 = outCanvas.toDataURL('image/png');

  ctx.type = "application/json";
  ctx.body = { success: true, data: { input_image: base64 } };
});

app.listen(3000, () => {
  console.log("server start on 3000 port");
});
