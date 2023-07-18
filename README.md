
## 本目录下执行做成docker image的操作
docker build -t ${repositoryName}/archie-qrcode-api:1.0.1： .

## run docker -d后台运行
docker run -d --name qrcode-api -p 3000:3000 ${repositoryName}/archie-qrcode-api:1.0.1

## 拉取镜像
docker pull ${repositoryName}/archie-qrcode-api:1.0.1