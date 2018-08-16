pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr:'10'))
        timeout(time: 5, unit: 'MINUTES')
        ansiColor('xterm')
    }
    environment { 
        GATSBY_JAZZ_URL = credentials('GATSBY_JAZZ_URL') 
    }
    stages {
        stage('Build pull requests') {
            when { changeRequest() }
            steps {
                script {
                    def prImage = docker.build("civicactions-internal-it/home:${env.CHANGE_ID}", "--build-arg GATSBY_JAZZ_URL=${GATSBY_JAZZ_URL} .")
                    prImage.run('--name="home-${env.CHANGE_ID}" -e HOSTNAME="home-${env.CHANGE_ID}.ci.civicactions.net" "civicactions-internal-it/home:${env.CHANGE_ID}"')
                    slackSend channel: 'marketing-home', message: "PR Review environment ready at http://home-${env.CHANGE_ID}.ci.civicactions.net/"
                }
            }
        }
        stage('Build master branch') {
            when { branch 'master' }
            steps {
                script {
                    docker.withRegistry('https://gcr.io', 'internal-it-k8s-gcr') {
                        def latestImage = docker.build("civicactions-internal-it/home", "--build-arg GATSBY_JAZZ_URL=${GATSBY_JAZZ_URL} .")
                        latestImage.push("latest")
                        latestImage.push("${env.GIT_COMMIT}")
                        slackSend channel: 'marketing-home', message: "Master branch built and image pushed successfully to Docker registry"
                    }
                }
            }
        }
    }
    post {
        failure {
            slackSend channel: 'marketing-home', message: "Build failed, see build log for details: ${env.BUILD_URL}/console"
        }
    }
}
