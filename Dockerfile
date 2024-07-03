# Sử dụng image Node.js chính thức
FROM node:22-alpine3.19


# Set working directory
WORKDIR /intern-first/server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (or your backend port)
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]