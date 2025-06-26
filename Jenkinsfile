pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel_token') // Token từ Jenkins Credentials
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/dangde-afk/test01'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Web App') {
            steps {
                bat 'npx expo export --web'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                // Cài vercel CLI nếu cần
                bat 'npm install -g vercel'

                // Deploy trực tiếp bằng token
                bat 'vercel deploy --prebuilt --prod --token=%VERCEL_TOKEN% --yes --confirm --cwd dist'
            }
        }
    }

    post {
        always {
            echo '✅ CI/CD Expo Web đã build và deploy lên Vercel thành công.'
        }
    }
}
