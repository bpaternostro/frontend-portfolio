FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

COPY ./package*.json ./

RUN ls -al

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "build" ]