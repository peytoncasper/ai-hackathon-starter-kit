# ---- Base Node ----
FROM node:14 AS base
WORKDIR /app


# ---- Copy Files/Build ----
FROM base AS build
WORKDIR /app
COPY . /app
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# ---- Release ----
FROM node:14-alpine as release
WORKDIR /app
COPY --from=build /app/frontend/build ./frontend/build
COPY --from=build /app/backend ./backend
WORKDIR /app/backend
RUN npm install --production

EXPOSE 3001
CMD ["node", "main.js"]
