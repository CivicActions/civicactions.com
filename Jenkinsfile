pipeline {
    agent any
    stages {
        stage('Build pull requests') {
            when { changeRequest() }
            steps {
                script {
                    docker.withRegistry('https://gcr.io', 'internal-it-k8s-gcr') {
                        def prImage = docker.build("civicactions-internal-it/home:${env.CHANGE_ID}")
                    }
                    sh 'docker run --name="home-${env.CHANGE_ID}" -e HOSTNAME="home-${env.CHANGE_ID}.ci.civicactions.net" "civicactions-internal-it/home:${env.CHANGE_ID}"'
                    slackSend channel: 'grugnog', message: 'PR Review environment ready at http://home-${env.CHANGE_ID}.ci.civicactions.net/'
                }
            }
        }
        stage('Build master branch') {
            when { branch 'docker' }
            steps {
                script {
                    docker.withRegistry('https://gcr.io', 'internal-it-k8s-gcr') {
                        def latestImage = docker.build("civicactions-internal-it/home")
                        latestImage.push("latest")
                        latestImage.push("${env.GIT_COMMIT}")
                    }
                    slackSend channel: 'grugnog', message: 'Master branch built and image pushed successfully'
                }
            }
        }
    }
}
