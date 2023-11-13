const router = require('express').Router();
const { healthcheck } = require('../controller/healthcheckController.js')
const { heartbeat } = require('../controller/heartbeatController.js')

/** HTTP Reqeust */
router.get('/healthcheck', healthcheck)
router.get('/heartbeat', heartbeat)

module.exports = router;