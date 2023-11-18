require('dotenv').config()

const fs = require('fs');
var path = require("path");
const { execShellCommand } = require('../parsers/getNodeStatus')
const { findDeadNodes } = require('../parsers/getDeadNodes')
const { formattedDateNow } = require('../parsers/getTimestamp')
const axios = require('axios')

const read = async () => {
    let env = await new Promise( (resolve, reject) => {
        return fs.readFile(path.resolve(__dirname, "../config.json"), {encoding: "utf8"}, (error, data) => {
            if(error) {
                console.log("fs error: " + error)
                return reject(error)
            }

            return resolve(data)
        });
    })

    return env
} 

const heartbeat = async (req, res) => {
    try {
        // read from config.json
        let env = await read().then( function(data){
            return JSON.parse(data)
        })

        // initialize the other variables
        let allNodes = []
        let liveNodes = []
        let appResponses = []

        // get all nodes, dead or alive
        const cmdAll = 'docker ps -a --format "{{.ID}}__{{.Names}}__{{.Status}}___"'
        // get only live nodes
        const cmdLive = 'docker ps --format "{{.ID}}__{{.Names}}__{{.Status}}___"'
            
        await execShellCommand(cmdAll).then(nodes => { allNodes = nodes })    
        await execShellCommand(cmdLive).then(nodes => { liveNodes = nodes })
    
        for(i = 0; i<env.CAPSTONE_APPS.length; i++) {
            await axios.get(env.CAPSTONE_APPS[i].url).then( res => {
                appResponses.push(res.data)
            }).catch(err => {
                appResponses.push({
                    name: env.CAPSTONE_APPS[i].name,
                    message: err.code, //AxiosError Codes
                    uptime: '0 seconds',
                    timestamp: formattedDateNow()
                })
            })
        }

        // send to monitoring service, publisher
        let message = JSON.stringify({
            agentID: env.CAPSTONE_AGENT_ID,
            contact: env.CAPSTONE_CONTACT_NAME,
            contact_email: env.CAPSTONE_CONTACT_EMAIL,
            restart: env.CAPSTONE_RESTART_URL,
            jenkins: env.CAPSTONE_JENKINS,
            createdOn: formattedDateNow(),
            allNodes: allNodes,
            liveNodes: liveNodes, 
            deadNodes: findDeadNodes(liveNodes, allNodes), 
            appStatus: appResponses, 
        })
        let customConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: env.CAPSTONE_MONITORING_SERVICE,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : message
        };

        axios.request(customConfig)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
            // always executed
            console.log("Tried kicking off axios post request")
        })
                    
        if(process.env.ENVIRONMENT === 'test') {            
            res.status(200).json({
                agentID: env.CAPSTONE_AGENT_ID,
                contact: env.CAPSTONE_CONTACT_NAME,
                contact_email: env.CAPSTONE_CONTACT_EMAIL,
                restart: env.CAPSTONE_RESTART_URL,
                jenkins: env.CAPSTONE_JENKINS,
                createdOn: formattedDateNow(),
                allNodes: allNodes,
                liveNodes: liveNodes, 
                deadNodes: findDeadNodes(liveNodes, allNodes), 
                appStatus: appResponses, 
            });
        }

    } catch (error) {
        console.log({
            name: 'capstone-local-agent',
            message: error.message,
            uptime: Math.floor(process.uptime()) + " seconds",
            timestamp: formattedDateNow() 
        })
        console.log("This round had an error.")

        if(process.env.ENVIRONMENT === 'test') {            
            res.status(500).json({
                name: 'capstone-local-agent',
                message: error.message,
                uptime: Math.floor(process.uptime()) + " seconds",
                timestamp: formattedDateNow() 
            });
        }
    }
}

module.exports = {
    heartbeat
};
