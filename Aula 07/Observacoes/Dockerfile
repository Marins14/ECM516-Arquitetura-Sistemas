# Comentário com # 
FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

# EXPOSE 50000

CMD ["npm","start"]
