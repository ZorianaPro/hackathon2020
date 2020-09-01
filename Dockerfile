FROM node:alpine as builder
ENV PUBLIC_URL ""
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
RUN npm run-script build

FROM nginx:alpine as frontend
COPY --from=builder /app/build /usr/share/nginx/html

FROM node:alpine
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
ENV NODE_ENV production
RUN npm install --production
COPY . /app
CMD ["npm", "start"]
