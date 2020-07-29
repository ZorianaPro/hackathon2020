FROM node:lts-alpine
COPY --chown=node:node ./build /var/www
COPY --chown=node:node ./package.json /var/www
COPY --chown=node:node ./package-lock.json /var/www
USER node
WORKDIR /var/www
ENV NODE_ENV=production
RUN npm ci
ENTRYPOINT ["npm"]
CMD ["start"]
