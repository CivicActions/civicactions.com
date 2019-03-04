pipeline {
    agent any
    triggers {
        cron(env.BRANCH_NAME == 'scheduled-build' ? '*/5 * * * *' : '')
    }
    options {
        buildDiscarder(logRotator(numToKeepStr:'10'))
        timeout(time: 15, unit: 'MINUTES')
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
                    // Remove existing container if it is running.
                    sh "docker rm -f \"home-${env.CHANGE_ID}\" || true"
                }
                script {
                    // Build new image and start container with the right hostname.
                    def prImage = docker.build("civicactions-internal-it/home:${env.CHANGE_ID}", "--build-arg GATSBY_JAZZ_URL=${GATSBY_JAZZ_URL} .")
                    prImage.run("--rm --name=\"home-${env.CHANGE_ID}\"")
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
                        latestImage.push("${env.GIT_COMMIT}-${env.BUILD_NUMBER}")
                        slackSend channel: 'marketing-home', message: "Master branch built and image pushed successfully to Docker registry"
                    }
                }
            }
        }
    }
    post {
        failure {
            slackSend channel: 'marketing-home', message: "Build failed, see build log for details: ${env.BUILD_URL}console"
        }
    }
}
