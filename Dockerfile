FROM node:bullseye-slim

RUN apt-get update -y && apt-get upgrade -y

COPY . /opt/squareteams
WORKDIR /opt/squareteams
RUN npm install

CMD ["npm", "run", "dev"]