FROM node:18-alpine

# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/ssrApp

COPY ./package.json  /usr/ssrApp
RUN pnpm install 

COPY ./ /usr/ssrApp

EXPOSE 3000

CMD ["pnpm", "run", "build"] 