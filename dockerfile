
FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Expose the application port
EXPOSE 3010
CMD ["npm", "start"]
