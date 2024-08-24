FROM node:14
RUN mkdir /app
RUN mkdir /app/node_modules
WORKDIR /app
COPY . .
CMD ["npm", "install"]
