FROM node:12

RUN mkdir -p /dist/web
WORKDIR /dist/web

RUN npm install

COPY . /dist/web

CMD ["npm", "start"]