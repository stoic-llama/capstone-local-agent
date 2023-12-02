const { formattedDateNow } = require('../parsers/getTimestamp')
const { exec } = require('child_process');

/* 
Prerequisites:
1.  Local agent must be in same docker network as the apps that are monitored
2.  The monitored apps must not have --rm in their docker run command, 
    or forcibly 'docker container rm <container_name>' 
    else the 'docker restart <container_name>' command will not 
    find the app container and error out.
*/

const restartWrapper = async (req, res) => {
    let name = req.body.name

    await restart(name, res)
}

const restart = (name, res) => {
    return new Promise( async (resolve) => {
        resolve(
            restartContainer(name, res),
        )
    })
}

function restartContainer(name, res) {
    try {
        const cmd = `docker restart ${name}`
            
        /* 
        Refer: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback

        If a callback function is provided, it is called with the arguments 
        (error, stdout, stderr). 

        error:
            On success, error will be null. 
            On error, error will be an instance of Error. 
            The error.code property will be the exit code of the process. 
            By convention, any exit code other than 0 indicates an error. 
            error.signal will be the signal that terminated the process.

        stdout & stderr: 
            The stdout and stderr arguments passed to the callback will 
            contain the stdout and stderr output of the child process. 
            By default, Node.js will decode the output as UTF-8 and 
            pass strings to the callback. 
        */
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn("error from restart: " + error)
                res.status(400).json({
                    message: `${name} could not be restarted. Error: ${error}`,
                    restartStatus: 'Fail',
                    timestamp: formattedDateNow()
                })
            }

            if (stdout) {
                console.log("stdout from restart: " + stdout) 

                // let obj = {
                //     message: `${name} was successfully restarted.`,
                //     restartStatus: 'Success',
                //     timestamp: formattedDateNow()
                // }
                // console.log("obj")
                // console.log(obj)

                res.status(200).json({
                    message: `${name} was successfully restarted.`,
                    restartStatus: 'Success',
                    timestamp: formattedDateNow()
                })
            }

            if (stderr) {
                console.warn("stderr from restart: " + stderr) 
                res.status(400).json({
                    message: `${name} could not be restarted. Error: ${error}`,
                    restartStatus: 'Fail',
                    timestamp: formattedDateNow()
                })
            }
        });   
    } catch (err) {
        console.warn("exec() exception from restart: " + err) 
        res.status(400).json({
            message: `${name} could not be restarted. Error: ${err}`,
            restartStatus: 'Fail',
            timestamp: formattedDateNow()
        })
    }
}

module.exports = {
    restartWrapper
};