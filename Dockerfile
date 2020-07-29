# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
ENV NODE_ENV=production
RUN npm ci
ENTRYPOINT ["npm"]
CMD ["start"]