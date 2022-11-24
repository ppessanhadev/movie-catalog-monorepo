FROM node:18.8.0-alpine

# curl needed to display Heroku release logs
RUN apk --no-cache add curl

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . /app

RUN yarn build

CMD yarn start:prod