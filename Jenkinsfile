pipeline {
  agent any
    
  stages {    
    stage('Cloning Git') {
      steps {
        git url: 'https://github.com/sangkhim/admin.git', branch: 'prod', credentialsId: '85a74dfc2fd55104b2c116be8998b36d5a6f2fb0'
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
         sh 'cp -a dist prod'
         sh 'sed -i "s~dist/browser~prod/browser~g" prod/server.js'
         sh 'export BUILD_ID=dontKillMePlease'
         sh 'pm2 restart prod/server'
      }
    }  
  }     
}
