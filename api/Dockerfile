FROM node:17-slim
RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npx prisma generate

RUN npm run build

CMD npm run start:prod:update