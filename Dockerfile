FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY *.json . 

RUN npm install pm2 -g
RUN npm install
COPY tsconfig.json .
COPY src ./src
RUN npm run build

COPY . .

EXPOSE 5000
CMD ["pm2-runtime", "start", "ecosystem.config.js"]