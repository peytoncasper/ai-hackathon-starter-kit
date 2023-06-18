# Python-React Full Stack AI Application

This is a full stack application with a frontend built in React and a backend in Python Flask. 

## Project Structure

The project is divided into two main parts:

- `frontend`: This directory contains the React app.
- `backend`: This directory contains the Flask app that uses Langchain to query OpenAI.

## Development

### Backend

To set up and start the backend server, follow these steps:

1. Navigate to the backend directory.

    ```bash
    cd backend
    ```

2. Create a Python virtual environment and activate it.

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the required Python packages.

    ```bash
    pip install -r requirements.txt
    ```

4. Start the Flask app. It will run on port 5001.

    ```bash
    export FLASK_APP=app.py
    export FLASK_ENV=development
    flask run --port=5001
    ```

### Frontend

To start the frontend React app, follow these steps:

1. Navigate to the frontend directory.

    ```bash
    cd frontend
    ```

2. Install the required packages.

    ```bash
    npm install
    ```

3. Start the React app. Note: it proxies requests to backend server at port 5001.

    ```bash
    npm run start
    ```

## Production

To prepare the application for production, follow these steps:

1. Navigate to the frontend directory and build the React app.

    ```bash
    cd frontend
    npm run build
    ```

2. This creates a `build` directory inside the frontend directory with a production build of your React app. Now, start the Flask app in production mode:

    ```bash
    cd ../backend
    export FLASK_APP=app.py
    flask run --port=5001
    ```

## Docker Deployment

To deploy the application using Docker, use the Dockerfile in the project root. This will create a Docker image with the Flask backend serving the React frontend. The application inside the Docker container will be available on port 5001.

1. Build the Docker image.

```bash
docker build -t python-react-app .
```

2. Run the Docker container.

```bash
docker run -p 5001:5001 -e OPENAI_API_KEY="" -e PINECONE_ENVIRONMENT="" -e PINECONE_API_KEY="" python-react-app
```