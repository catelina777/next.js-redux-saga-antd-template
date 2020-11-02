FROM node:14-slim AS builder
WORKDIR /app
COPY ./package.json ./
RUN yarn install --production
COPY . .
RUN yarn build

FROM node:14-slim AS production
WORKDIR /app
COPY --from=builder /app ./
CMD ["yarn", "start"]