const router = require('express').Router();
const { healthcheck } = require('../controller/healthcheckController.js')
const { heartbeat } = require('../controller/heartbeatController.js')
const { config, readConfig } = require('../controller/configController.js')
const { startJob, stopJob } = require('../controller/jobController.js')

/** HTTP Reqeust */
router.get('/healthcheck', healthcheck)
router.get('/heartbeat', heartbeat)
router.get('/stopJob', stopJob)
router.get('/startJob', startJob)
router.get('/readConfig', readConfig)
router.post('/config', config)

module.exports = router