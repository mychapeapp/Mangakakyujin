FROM node:lts-bullseye-slim

WORKDIR /app/frontend

#RUN apt-get update && apt-get clean && apt-get install -y npm 
RUN apt-get clean
RUN npm install -g npm@latest

COPY ./package*.json ./
#RUN npm run update
RUN npx npm-check-updates -u
RUN npm install
COPY . .
RUN npm run build
CMD ["npm","run","start"]