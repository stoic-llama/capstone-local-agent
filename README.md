# Resources
1. [How to Convert HTML Form Field Values to a JSON Object](https://www.learnwithjason.dev/blog/get-form-values-as-json/)
2. [Can I serve static files while providing an API for the server?](https://stackoverflow.com/questions/36667343/can-i-serve-static-files-while-providing-an-api-for-the-server) 
3. [Comparing the best Node.js schedulers](https://blog.logrocket.com/comparing-best-node-js-schedulers/)


# Tips from Nana DevOps
This is how you can see the `.env` file from the container.
```bash
cat /var/jenkins_home/capstone/.env 
```

This is how you can see the `.env` file from the host machine.
```bash
cat /var/lib/docker/volumes/jenkins_home/_data/capstone/.env
```

Note the `.env` file is stored on the host machine, not in the Jenkins container. The Jenkins container can see the `.env` file because when the Jenkins container was created, the host machine file system was mounted onto the container.

The capstone folder was manually created by me in the folder that the container can see, so I can reference it later from the Jenkins pipeline shell command to do a `docker cp` from host machine to container that is created in the pipeline.

To find the path of the file system mounted onto the container, in the host machine simply issue this command `docker volume inspect`.