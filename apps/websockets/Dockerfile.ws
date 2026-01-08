FROM oven/bun:1

WORKDIR /usr/src/app

COPY . .

RUN bun install

RUN bun RUN generate:db

EXPOSE 8081

CMD [ "bun","start:ws" ]
