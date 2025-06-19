pipeline {
    agent any 
    stages {
        stage ('clone') {
            steps 
                {
                    git branch: 'main', url: 'https://github.com/dangde-afk/test01.git'
                }
        }
stage ('Publish') {
		steps {
			echo 'public 2 runnig folder'
		//iisreset /stop // stop iis de ghi de file 
			bat 'xcopy "%WORKSPACE%" /E /Y /I /R "c:\\bt_code_all"'
 		}
	}

} // end stages
}//end pipeline
