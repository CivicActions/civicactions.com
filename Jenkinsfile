node {
    checkout scm

    docker.withRegistry('https://gcr.io', 'internal-it-k8s-gcr') {
        def customImage = docker.build("civicactions-internal-it/home:${env.BUILD_ID}")
        customImage.push()
    }
}