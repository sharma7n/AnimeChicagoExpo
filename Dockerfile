# Use an image with the latest nodejs and npm
FROM node:8.6-slim

# Set the working directory to /animechicago
WORKDIR /animechicago

# Copy directory contents into the container
ADD . /animechicago

# Install packages
RUN npm install -g exp
RUN npm install

# Expose necessary ports
EXPOSE 80 8080 19000 19001

# Start the app
CMD ["npm", "start"]