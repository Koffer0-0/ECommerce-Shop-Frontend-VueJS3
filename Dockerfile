# Build stage for production
FROM node:lts-alpine as production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm run dev