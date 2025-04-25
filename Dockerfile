# Use the official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

# Expose the port defined in .env (Docker can't read .env directly, but it's good practice)
EXPOSE 8000

# Start the app
CMD ["npm", "start"]