pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Execute build commands here, e.g., for Node.js application:
                // sh 'npm install'
                // sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Execute test commands here, e.g., for Node.js application:
                // sh 'npm test'
            }
        }

        stage('Docker Build and Push') {
            steps {
                // Build Docker image and push it to a Docker registry, e.g., Docker Hub:
                // script {
                //     docker.build('my-webapp-image')
                //     docker.withRegistry('https://registry.example.com', 'my-registry-credentials') {
                //         docker.image('my-webapp-image').push()
                //     }
                // }
            }
        }

        stage('Deploy') {
            steps {
                // Use Ansible or other tools to deploy the application to the server.
            }
        }
    }
}
