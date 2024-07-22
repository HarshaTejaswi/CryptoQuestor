# My Crypto App

## Overview
A high-performance application for tracking cryptocurrency prices using Go for the backend, React for the frontend, and PostgreSQL for data storage.

## Project Structure
my-crypto-app/
├── backend/
├── frontend/
├── deployments/
├── docker-compose.yml
└── README.md

## Getting Started

### Prerequisites
- Docker
- Docker Compose
- Kubernetes (kubectl and minikube or a Kubernetes cluster)

### Running with Docker Compose
1. Build and start the containers:
    ```sh
    docker-compose up --build
    ```
2. Access the frontend at `http://localhost:3001`

### Deploying to Kubernetes
1. Start your Kubernetes cluster (if using minikube):
    ```sh
    minikube start
    ```
2. Apply the deployment and service files:
    ```sh
    kubectl apply -f deployments/
    ```
3. Access the frontend service:
    ```sh
    minikube service frontend-service
    ```

## Contributing
Please feel free to submit pull requests and issues. We appreciate your help!

## License
This project is licensed under the MIT License.
