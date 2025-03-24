FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY src ./src
COPY tsconfig.json ./
COPY dist ./dist
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--host"]