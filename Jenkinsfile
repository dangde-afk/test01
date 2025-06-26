pipeline {
    agent any

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

        stage('Run Expo Web') {
            steps {
                script {
                    // Tắt process đang chạy cũ (nếu có) bằng pm2
                    bat 'pm2 delete test01-web || exit 0'

                    // Chạy Expo Web bằng pm2 để giữ cho luôn chạy ngầm
                    bat 'pm2 start "npx expo start --web --no-interactive" --name test01-web'
                }
            }
        }
    }

    post {
        always {
            echo '✅ CI/CD React Native Web (Expo) hoàn tất.'
        }
    }
}
