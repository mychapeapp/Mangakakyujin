FROM node:18-slim as node_build

WORKDIR /app/api_set

#RUN apt-get update && apt-get clean && apt-get install -y npm 
RUN apt-get clean
RUN npm install -g npm@latest
COPY package*.json ./
#RUN npm run update
RUN npx npm-check-updates -u

RUN npm install 

COPY . .

RUN npx webpack

FROM gcr.io/distroless/nodejs18-debian11
#FROM node:18-slim
#FROM node:18

ENV NODE_ENV production
WORKDIR /app/api
COPY --from=node_build /app/api_set/dist/ /app/api/

EXPOSE 3000

CMD ["bundle.js"]