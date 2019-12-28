
const os = require('os')
const homeDir = os.cpus()[0].model

const message = homeDir
document.getElementById('cpus').innerHTML = `Processor : ${message}`
