# Build stage for production
FROM node:lts-alpine as production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=production /app/dist /usr/share/nginx/html
COPY ./public/ .
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]