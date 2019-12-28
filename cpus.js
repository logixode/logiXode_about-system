
const os = require('os')

const cpus      = os.cpus()[0].model
const mbTotal   = parseInt(((os.totalmem())/1000000))
const mbFree    = parseInt(((os.freemem())/1000000))
const mbUse     = mbTotal - mbFree

document.getElementById('cpus').innerHTML = cpus
document.getElementById('ram').innerHTML = `${mbUse}MB / ${mbTotal}MB`
