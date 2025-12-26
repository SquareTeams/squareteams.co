# ---- Dependencies Stage ----
# Installs dependencies and creates a base for the builder and dev environments
FROM node:bullseye-slim AS deps
WORKDIR /opt/squareteams
COPY package.json package-lock.json ./
RUN npm install

# ---- Builder Stage ----
# Copies source code and builds the application for production
FROM deps AS builder
COPY . .
RUN npm run build

# ---- Runner Stage ----
# Creates the final, lean production image
FROM node:bullseye-slim AS runner
WORKDIR /opt/squareteams

ENV NODE_ENV=production

COPY --from=builder /opt/squareteams/public ./public
COPY --from=builder /opt/squareteams/.next ./.next
COPY --from=builder /opt/squareteams/node_modules ./node_modules
COPY --from=builder /opt/squareteams/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]