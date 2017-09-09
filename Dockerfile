FROM node:8-alpine AS build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY data /app/data
COPY . /app/
RUN NODE_ENV=production yarn build

FROM node:8-alpine
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn --production
COPY --from=build /app /app
CMD yarn start
