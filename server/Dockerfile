FROM node:18 AS build

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18 AS production

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

RUN npm install --only=production

EXPOSE 4001

CMD ["npm", "start"]
