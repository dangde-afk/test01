// Jenkinsfile này định nghĩa một quy trình tích hợp liên tục và triển khai cho ứng dụng React Native Android.
// Nó bao gồm các giai đoạn để clone mã nguồn, cài đặt các phụ thuộc, kiểm thử, xây dựng phiên bản Android release,
// và lưu trữ artifact của bản dựng.
pipeline {
    // Chỉ định rằng pipeline có thể chạy trên bất kỳ agent nào có sẵn.
    // Đối với các bản dựng iOS, thông thường sẽ cần một agent macOS có Xcode.
    agent any

    // Định nghĩa chuỗi các giai đoạn trong pipeline.
    stages {
        // Giai đoạn 1: Clone kho lưu trữ
        // Clone mã nguồn của ứng dụng React Native từ kho Git và nhánh được chỉ định.
        stage ('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/dangde-afk/test01.git'
            }
        }

        // Giai đoạn 2: Cài đặt phụ thuộc
        // Cài đặt tất cả các phụ thuộc Node.js và JavaScript cần thiết cho dự án React Native.
        stage ('Install Dependencies') {
            steps {
                echo 'Đang cài đặt các phụ thuộc của Node.js và React Native...'
                // Sử dụng 'npm install'. Nếu dự án của bạn dùng Yarn, hãy thay bằng 'yarn install'.
                bat 'npm install'
            }
        }

        // Giai đoạn 3: Chạy kiểm thử
        // Thực thi bất kỳ bài kiểm thử đơn vị hoặc tích hợp JavaScript nào được định nghĩa cho dự án React Native (ví dụ: sử dụng Jest).
        stage ('Run Tests') {
            steps {
                echo 'Đang chạy các bài kiểm thử JavaScript...'
                // Giả định 'npm test' đã được cấu hình trong package.json của bạn để chạy các bài kiểm thử.
                bat 'npm test'
            }
        }

        // Giai đoạn 4: Xây dựng bản Android Release
        // Xây dựng gói ứng dụng Android (APK/AAB) sẵn sàng để phát hành.
        // Lệnh này yêu cầu các công cụ Android SDK được cấu hình trên agent Jenkins.
        stage ('Build Android Release') {
            steps {
                echo 'Đang xây dựng APK bản phát hành Android của React Native...'
                // Lệnh 'npx react-native build-android' biên dịch dự án Android.
                // APK đầu ra thường sẽ được tìm thấy trong 'android/app/build/outputs/apk/release/app-release.apk'
                bat 'npx react-native build-android --mode=release'
            }
        }

        // Giai đoạn 5: Lưu trữ Artifact Android
        // Lưu trữ APK Android đã tạo để có thể tải xuống từ Jenkins.
        // Điều này giúp artifact bản dựng có sẵn cho việc phân phối tiếp theo (ví dụ: kiểm thử thủ công, tải lên Google Play Store).
        stage ('Archive Android Artifact') {
            steps {
                echo 'Đang lưu trữ APK Android đã tạo...'
                // Đảm bảo thư mục đích cho các artifact đã lưu trữ tồn tại
                bat 'mkdir "%WORKSPACE%\\build_artifacts"'
                // Sao chép APK bản phát hành đã tạo vào một thư mục riêng để lưu trữ
                bat 'xcopy "android\\app\\build\\outputs\\apk\\release\\app-release.apk" "%WORKSPACE%\\build_artifacts\\" /Y'
                // Lưu trữ APK, giúp nó có thể truy cập được từ trang bản dựng của Jenkins
                archiveArtifacts artifacts: 'build_artifacts/app-release.apk', fingerprint: true
                echo 'APK Android đã được lưu trữ thành công.'
            }
        }
    } // Kết thúc khối stages
} // Kết thúc khối pipeline

