FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn --prod
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]