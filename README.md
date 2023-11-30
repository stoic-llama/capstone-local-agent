# Capstone Monitoring Project - Local Agent [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) 

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)

<!-- <small>*This project is part of the Central Connecticut State University capstone requirement for graduation from the Software Engineering graduate program.*</small> -->

### A Light-weight Monitoring Solution


This can be the first step to automating your workflow to build applications. See the following features below. 

- ✅ Automated restart when your web application is down
- ✅ Automated notification when your web application is down
- ✅ Dashboard to see: 
    - 💪 Current status of the availability of all apps on one page 
    - 💪 Foundational DevOps metrics measuring speed and stability of your deployment to production. 

This solution will work with any application as long as your application is hosted in a docker container.

## Prerequisites

1. A few applications that are dockerized on a host machine, and on the same docker network.

## Installation

1. 

Refer https://raw.githubusercontent.com/joshwcomeau/use-sound/master/README.md and https://github.com/joshwcomeau/use-sound/blob/master/README.md as template from Josh Comeau's README.

Refer https://gist.github.com/rxaviers/7360908 for emojis in github.

Refer https://github.com/Ileriayo/markdown-badges for shield.io for badges in README.md to use.


<!-- 2. Add You insert a config.json and a scheduler.json file on the host machine. These are needed since the local agent does not use a database to persist data. When you add these files to the host machine, make sure to `chmod +x <filename>` to that the file can be edited.
3. (Optional) You can use Jenkins pipeline to deploy the local agent on your docker network where the other apps are hosted. Refer to the Jenkinsfile in the repository at the root level. -->




### Tips from Nana DevOps
This is how you can see the `config.json` and `scheduler.json` file from the container.
```bash
cat /var/jenkins_home/capstone/config.json
cat /var/jenkins_home/capstone/scheduler.json 
```

This is how you can see the files from the host machine.
```bash
cat /var/lib/docker/volumes/jenkins_home/_data/capstone/config.json
cat /var/lib/docker/volumes/jenkins_home/_data/capstone/scheduler.json
```

Note the `config.json` and `scheduler.json` files iare stored on the host machine, not in the Jenkins container. The Jenkins container can see the files because when the Jenkins container was created, the host machine file system was mounted onto the container.

The capstone folder was manually created by me in the folder that the container can see, so I can reference it later from the Jenkins pipeline shell command to do a `docker cp` from host machine to container root directory that is created in the pipeline.

To find the path of the file system mounted onto the container, in the host machine simply issue this command `docker volume inspect capstone_home`.

### Two notes on config.json localAgentEnvironment field:
1. If test: 
    1. then every time heartbeat() is invoked, a response is sent. 
    2. This breaks scheduling because app doesn't know where to send response.
    3. This is mainly used for manual testing, an ad hoc one time call.
2. If production:
    1. then every time heartbeat() is invoked, no response. 
    2. This allows scheduling. 
    3. Note under production you cannot call /heartbeat API because it manually invokes heartbeat() which would not send a response, and your requestor would be hanging because it never receives a response.


### Other Resources
1. [How to Convert HTML Form Field Values to a JSON Object](https://www.learnwithjason.dev/blog/get-form-values-as-json/)
2. [Can I serve static files while providing an API for the server?](https://stackoverflow.com/questions/36667343/can-i-serve-static-files-while-providing-an-api-for-the-server) 
3. [Comparing the best Node.js schedulers](https://blog.logrocket.com/comparing-best-node-js-schedulers/)
