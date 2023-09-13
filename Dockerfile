FROM node:17.4.0
WORKDIR /work
COPY package.json ./
RUN npm i
COPY ./* ./
RUN npm run build

