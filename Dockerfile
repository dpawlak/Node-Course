FROM node:14
WORKDIR /usr/src/app
COPY package*.json /app
RUN npm install --only=production
COPY . .
EXPOSE $PORT
CMD ["npm", "start"]