FROM node:16-alpine as builder

USER node
WORKDIR /home/node

COPY package*.json ./

RUN yarn

COPY --chown=node:node . .

RUN yarn prisma generate
RUN yarn build

FROM node:16-alpine

EXPOSE 3000

USER node
WORKDIR /home/node

# Copy files from base image 'builder' to this instance of build
COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/src/main.js"]