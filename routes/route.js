const router = require('express').Router();
const { healthcheck } = require('../controller/healthcheckController.js')
const { heartbeat } = require('../controller/heartbeatController.js')
const { config, readConfig } = require('../controller/configController.js')
const { scheduler, readScheduler } = require('../controller/schedulerController.js')
const { startJob, stopJob } = require('../controller/jobController.js')
const { restartWrapper } = require('../controller/restartController.js')


/** HTTP Reqeust */
router.get('/healthcheck', healthcheck)
router.get('/heartbeat', heartbeat)
router.get('/stopJob', stopJob)
router.post('/startJob', startJob)
router.get('/readConfig', readConfig)
router.post('/config', config)
router.get('/readScheduler', readScheduler)
router.post('/scheduler', scheduler)
router.post('/restart', restartWrapper)


module.exports = router