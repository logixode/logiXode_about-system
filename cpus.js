
const os = require('os')
const homeDir = os.cpus()[0].model

document.getElementById('cpus').innerHTML = homeDir
