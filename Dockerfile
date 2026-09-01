# syntax=docker/dockerfile:1

FROM node:26-alpine AS dependencies

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@11.7.0 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM dependencies AS development

COPY . .
EXPOSE 5173
CMD ["pnpm", "dev", "--host", "0.0.0.0"]

FROM dependencies AS build

COPY . .
ARG BASE_PATH=/
ARG VITE_SITE_URL=http://localhost:8080/
ENV BASE_PATH=${BASE_PATH}
ENV VITE_SITE_URL=${VITE_SITE_URL}
RUN pnpm build && pnpm verify:budget

FROM nginxinc/nginx-unprivileged:1.27-alpine AS production

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --output-document=- http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
