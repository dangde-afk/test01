// This Jenkinsfile defines a continuous integration and deployment pipeline for a React Native Android application.
// It includes stages for source code cloning, dependency installation, testing, building the Android release,
// and archiving the build artifact.
pipeline {
    // Specifies that the pipeline can run on any available agent.
    // For iOS builds, a macOS agent with Xcode would typically be required.
    agent any

    // Defines the sequence of stages in the pipeline.
    stages {
        // Stage 1: Clone Repository
        // Clones the React Native application's source code from the specified Git repository and branch.
        stage ('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/dangde-afk/test01.git'
            }
        }

        // Stage 2: Install Dependencies
        // Installs all Node.js and JavaScript dependencies required by the React Native project.
        stage ('Install Dependencies') {
            steps {
                echo 'Installing Node.js and React Native dependencies...'
                // Using 'npm install'. If your project uses Yarn, replace with 'yarn install'.
                bat 'npm install'
            }
        }

        // Stage 3: Run Tests
        // Executes any JavaScript unit or integration tests defined for the React Native project (e.g., using Jest).
        // The "Missing script: "test"" error occurs if there is no "test" entry in the "scripts" section of the package.json file.
        // Please ensure you have defined a "test" script (e.g., "test": "jest") or you can skip this stage if no tests are present.
        stage ('Run Tests') {
            steps {
                echo 'Running JavaScript tests...'
                // Assumes 'npm test' is configured in your package.json to run your tests.
                bat 'npm test'
            }
        }

        // Stage 4: Build Android Release
        // Builds the release-ready Android application package (APK/AAB).
        // This command requires Android SDK tools to be configured on the Jenkins agent.
        stage ('Build Android Release') {
            steps {
                echo 'Building React Native Android release APK...'
                // The 'npx react-native build-android' command compiles the Android project.
                // The output APK will typically be found in 'android/app/build/outputs/apk/release/app-release.apk'
                bat 'npx react-native build-android --mode=release'
            }
        }

        // Stage 5: Archive Android Artifact
        // Archives the generated Android APK so it can be downloaded from Jenkins.
        // This makes the build artifact available for further distribution (e.g., manual testing, Google Play Store upload).
        stage ('Archive Android Artifact') {
            steps {
                echo 'Archiving the generated Android APK...'
                // Ensure the target directory for archived artifacts exists
                bat 'mkdir "%WORKSPACE%\\build_artifacts"'
                // Copy the generated release APK to a dedicated directory for archiving
                bat 'xcopy "android\\app\\build\\outputs\\apk\\release\\app-release.apk" "%WORKSPACE%\\build_artifacts\\" /Y'
                // Archive the APK, making it accessible from the Jenkins build page
                archiveArtifacts artifacts: 'build_artifacts/app-release.apk', fingerprint: true
                echo 'Android APK archived successfully.'
            }
        }
    } // End of stages block
} // End of pipeline block