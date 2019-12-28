pipeline {
  agent any
    
  stages {    
    stage('Cloning Git') {
      steps {
        git url: 'https://github.com/sangkhim/admin.git', branch: 'prod', credentialsId: '50b61f7895f284b1276dd2078c754ebaabe801e7'
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
