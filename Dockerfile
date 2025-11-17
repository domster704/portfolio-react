FROM node:22-alpine3.19 AS builder

LABEL developer="domster704"

WORKDIR /var/www/ntv

COPY package*.json ./

COPY build/ build/
COPY src/ src/
COPY .babelrc webpack.config.js ./

RUN npm i
RUN npm run-script build

FROM nginx:1.27.1-alpine3.20 AS nginx

LABEL developer="domster704"

COPY --from=builder /var/www/ntv/build/ ./var/www/ntv/build/

COPY nginx/portfolio-front.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80

