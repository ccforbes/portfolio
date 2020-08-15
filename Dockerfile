FROM node:10
WORKDIR /portfolio-nextjs
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 443
CMD ["npm", "start"]
