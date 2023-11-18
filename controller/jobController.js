// Template provided from https://chat.openai.com/c/b84a3b46-9583-4ad0-927a-c021509fc928
const cron = require('node-cron');
const { heartbeat } = require('./heartbeatController.js')
const { formattedDateNow } = require('../parsers/getTimestamp')

let isJobRunning = false;
let scheduledTask;

const start = (freq) => {
    isJobRunning = true;
    scheduledTask = cron.schedule(freq, async () => {
        console.log('Job is running...');
        await heartbeat()
    });
    scheduledTask.start();
};

const stop = () => {
    if (isJobRunning) {
        scheduledTask.stop();
        isJobRunning = false;
        console.log('Job has stopped running...')
    } 
};

const startJob = (req, res) => {
    start(req.body.freq)
    res.status(200).json({ 
        message: 'Job started successfully',
        timestamp: formattedDateNow() 
    });
}

const stopJob = (req, res) => {
    stop()
    res.status(200).json({ 
        message: 'Either no job running or job has stopped successfully',
        timestamp: formattedDateNow()  
    });
}

module.exports = {
  startJob,
  stopJob,
};
