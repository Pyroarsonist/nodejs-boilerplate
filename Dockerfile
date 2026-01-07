FROM node:24-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./

RUN npm i

COPY . .

RUN npm run build

FROM node:24-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.env ./.env

ENV NODE_ENV=production

CMD ["npm", "run", "start"]
