pipeline {
    agent any
    triggers {
        // Build/deploy master at noon and 6pm PT.
        cron(env.BRANCH_NAME == 'master' ? '0 2,20 * * *' : '')
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
                    // Extract public directory from a previously built image if it exists. This improves build times.
                    sh 'id=$(docker create civicactions-internal-it/home:latest 2> /dev/null); if [ "${id}" != "" ]; then docker cp $id:/srv public; docker rm ${id}; echo "Cache updated"; fi'
                    // Build new image and start container with the right hostname.
                    def prImage = docker.build("civicactions-internal-it/home:${env.CHANGE_ID}", "--build-arg GATSBY_JAZZ_URL=${GATSBY_JAZZ_URL} --pull .")
                    prImage.run("--rm --name=\"home-${env.CHANGE_ID}\"")
                    slackSend channel: 'marketing-home', message: "PR Review environment ready at http://home-${env.CHANGE_ID}.ci.civicactions.net/"
                }
            }
        }
        stage('Build master branch') {
            when { branch 'master' }
            steps {
                script {
                    // Extract public directory from a previously built image if it exists.
                    // This improves build times and also means that previous assets are normally around to avoid a 404
                    // when the HTML request goes to an new release pod and an asset goes to an old release pod (or vice-versa).
                    sh 'id=$(docker create civicactions-internal-it/home:latest 2> /dev/null); if [ "${id}" != "" ]; then docker cp $id:/srv public; docker rm ${id}; echo "Cache updated"; fi'
                    // Add a timestamp file to ensure we rebuild the site content
                    sh "date > .build-timestamp"
                    docker.withRegistry('https://gcr.io', 'internal-it-k8s-gcr') {
                        def latestImage = docker.build("civicactions-internal-it/home", "--build-arg GATSBY_JAZZ_URL=${GATSBY_JAZZ_URL} --pull .")
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
