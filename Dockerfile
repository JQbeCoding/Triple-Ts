# Use a lightweight Node.js Alpine image for a smaller footprint
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the dependency files first to leverage Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite React frontend for production
RUN npm run build

# Set the environment to production so vite-express knows to serve static files
ENV NODE_ENV=production

# Expose the port your Express server is listening on
EXPOSE 3000

# Command to start your Express server
CMD ["node", "webServer.js"]
