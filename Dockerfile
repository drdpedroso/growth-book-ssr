FROM node:8
COPY ./package* ./
RUN npm install
EXPOSE 3000
