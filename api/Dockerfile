FROM node:17-slim
RUN apt-get update
RUN apt-get install -y openssl

RUN apk --no-cache add curl

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN npx prisma generate
RUN npm run build

CMD npm run start:prod:update