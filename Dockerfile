# Sử dụng image Node.js chính thức
FROM node:22-alpine3.19


# Set working directory
WORKDIR /intern-first/server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g @babel/core @babel/cli

# Copy the rest of the application code
COPY . .

RUN npm run build-src

# Command to run the backend server
CMD ["npm", "run","build"]
