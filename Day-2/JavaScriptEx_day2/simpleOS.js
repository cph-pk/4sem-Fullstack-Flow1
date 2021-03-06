const os = require('os');

const info = {
    platform: os.platform(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
    eol: os.EOL
};

//console.log(info);
module.exports = info;