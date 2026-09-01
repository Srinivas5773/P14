# Multi-stage lightweight production container
FROM node:20-alpine AS runner
WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy application assets
COPY . .

# Expose port and run game server
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]
