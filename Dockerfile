FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

COPY . .

RUN npm install


CMD [ "npm", "run", "build" ]