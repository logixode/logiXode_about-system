
const os = require('os')

const cpus      = os.cpus()[0].model
const mbTotal   = parseInt(((os.totalmem())/1048576))
const mbFree    = parseInt(((os.freemem())/1048576))
const mbUse     = mbTotal - mbFree

document.getElementById('cpus').innerHTML = cpus
document.getElementById('ram').innerHTML = `${mbUse}MB / ${mbTotal}MB`
