FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY *.json . 

RUN npm install
COPY tsconfig.json .
COPY src ./src
RUN npm run build

COPY . .

EXPOSE 5000
CMD ["node", "start", "ecosystem.config.js"]