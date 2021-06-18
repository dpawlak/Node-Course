FROM node:14
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install --only=production
COPY . .
EXPOSE $PORT
CMD ["npm", "start"]