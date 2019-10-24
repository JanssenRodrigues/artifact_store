FROM node:12

RUN mkdir -p /dist/api
WORKDIR /dist/api

ADD . /dist/api

RUN npm install

COPY . /dist/api

CMD ["npm", "run", "dev"]