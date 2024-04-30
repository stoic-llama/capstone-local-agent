def getCommitSha() {
    return sh(returnStdout: true, script: "git rev-parse HEAD | tr -d '\n'")
}

pipeline {
    agent any
    environment {
        version = getCommitSha() // '1.2'
        containerName = 'capstone-local-agent'
    }

    stages {
        stage("login") {
            steps {
                echo 'authenticating into jenkins server...'
                sh 'docker login'
                // sh 'docker login registry.digitalocean.com'
                
                // note you need to manually add token for capstone-ccsu once 
                // in Jenkins conatiner that is in the droplet
                // Refer to "API" tab in Digital Ocean
                // sh 'doctl auth init --context capstone-ccsu'  
            }
        }

        stage("build") {
            steps {
                // echo 'building the application...'
                // sh 'doctl registry repo list-v2'
                // sh "docker build -t capstone-frontend:${version} ."
                // sh "docker tag capstone-frontend:${version} registry.digitalocean.com/capstone-ccsu/capstone-frontend:${version}"
                // sh "docker push registry.digitalocean.com/capstone-ccsu/capstone-frontend:${version}"
                // sh 'doctl registry repo list-v2'

                echo 'building the application...'
                // sh 'doctl registry repo list-v2'
                sh 'docker build -t "${containerName}:${version}" .'
                sh 'docker tag "${containerName}:${version}" stoicllama/"${containerName}:${version}"'
                sh 'docker push stoicllama/"${containerName}:${version}"'
                // sh 'doctl registry repo list-v2'
            }
        }

        stage("test") {
            steps {
                echo 'testing the application...'    
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying the application...' 
                
                // withCredentials([
                //     string(credentialsId: 'website', variable: 'WEBSITE'),
                // ]) {
                //     script {
                //         // Use SSH to check if the container exists. 
                //         // If not exists, capture error so Jenkins can continue.
                //         def containerExists = sh(script: 'ssh -i /var/jenkins_home/.ssh/website_deploy_rsa_key "${WEBSITE}" docker stop "${containerName}"', returnStatus: true)

                //         echo "containerExists: $containerExists"
                //     }
                // }

                withCredentials([
                    string(credentialsId: 'website', variable: 'WEBSITE'),
                ]) {
                    script {
                        // Use SSH to check if the container exists 
                            // --> If yes, stop and remove it
                            // --> If no, display result true for both stop and rm command, no harm done 
                        // Then let Jenkins continue
                        def containerStopped = sh(script: 'ssh -i /var/jenkins_home/.ssh/website_deploy_rsa_key "${WEBSITE}" docker stop ${containerName}', returnStatus: true) == 0

                        echo "docker stop command was finished successfully: $containerStopped"

                        def containerRemoved = sh(script: 'ssh -i /var/jenkins_home/.ssh/website_deploy_rsa_key "${WEBSITE}" docker rm ${containerName}', returnStatus: true) == 0

                        echo "docker rm command was finished successfully: $containerRemoved"
                    }
                }

                // Use the withCredentials block to access the credentials
                // Note: need --rm when docker run.. so that docker stop can kill it cleanly
                withCredentials([
                    string(credentialsId: 'website', variable: 'WEBSITE'),
                ]) {
                    sh '''
                        ssh -i /var/jenkins_home/.ssh/website_deploy_rsa_key ${WEBSITE} "docker run -d \
                        -p 5900:5900 \
                        -e PORT=5900 \
                        -e API_VERSION=1 \
                        --name ${containerName} \
                        --network helpmybabies \
                        -v /var/run/docker.sock:/var/run/docker.sock \
                        -v capstone_home:/var/capstone_home \
                        stoicllama/${containerName}:${version}
                        
                        docker ps
                        "
                    '''
                }

                withCredentials([
                    string(credentialsId: 'website', variable: 'WEBSITE'),
                ]) {
                    sh '''
                        ssh -i /var/jenkins_home/.ssh/website_deploy_rsa_key ${WEBSITE} "/var/lib/docker/volumes/capstone_home/_data/agent/load_config.sh"
                    '''
                }

                withCredentials([
                    string(credentialsId: 'website', variable: 'WEBSITE'),
                ]) {
                    sh '''
                        ssh -i /var/jenkins_home/.ssh/website_deploy_rsa_key ${WEBSITE} "/var/lib/docker/volumes/capstone_home/_data/agent/load_scheduler.sh"
                    '''
                }
            }

        }
    }

    post {
        always {
            echo "Release finished and start clean up"
            deleteDir() // the actual folder with the downloaded project code is deleted from build server
        }
        success {
            echo "Release Success"
        }
        failure {
            echo "Release Failed"
        }
        cleanup {
            echo "Clean up in post workspace" 
            cleanWs() // any reference this particular build is deleted from the agent
        }
    }

}