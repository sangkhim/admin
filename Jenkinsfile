pipeline {
  agent any
    
  stages {    
    stage('Cloning Git') {
      steps {
        git url: 'https://github.com/sangkhim/admin.git', branch: 'prod', credentialsId: '1bbb079f-e89b-4083-8165-827acdb540da'
      }
    }
    
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build SSR') {
      steps {
        sh 'npm run build:ssr'
      }
    }
    
    stage('Run on PM2') {
      steps {
         sh 'export BUILD_ID=dontKillMePlease'
         sh 'pm2 start dist/server'
      }
    }  
  }     
}
