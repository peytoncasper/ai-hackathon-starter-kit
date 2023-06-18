# ---- Build Stage ----
# Use an official Node runtime as a parent image
FROM node:14 as build

# Set the working directory for the frontend
WORKDIR /usr/src/app/frontend

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY frontend/ .

# Create a build of the app
RUN npm run build

# ---- Production Stage ----
FROM python:3.9-slim

COPY --from=build /usr/src/app/frontend/build /usr/src/app/frontend/build

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory for the backend
WORKDIR /usr/src/app/backend

# Install pip and required packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc \
    && rm -rf /var/lib/apt/lists/* \
    && pip3 install --upgrade pip


# Copy requirements.txt
COPY backend/requirements.txt .

# Install backend dependencies
RUN pip3 install -r requirements.txt

# Copy backend source
COPY backend/ .

# Make port 5001 available to the world outside this container
EXPOSE 5001

# Run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=5001"]
