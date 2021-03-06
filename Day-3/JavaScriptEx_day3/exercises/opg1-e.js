const { create } = require('domain');
const http = require('http');
const makeRandom = require("./opg1-bc");

const _portNo = 3000

const myJsonRandoms = {
    "title": "6 Secure Randoms",
    "randoms": [
        { "length": 48, "random": "" },
        { "length": 40, "random": "" },
        { "length": 32, "random": "" },
        { "length": 24, "random": "" },
        { "length": 16, "random": "" },
        { "length": 8, "random": "" }
    ]
}

const iMadeRandom = async () => {
    try {
        myJsonRandoms.randoms.forEach(elem => {
            Promise.all([makeRandom(elem.length)])
                .then((message) => {
                    elem.random = message[0];
                    //console.log(elem)
                })
                .catch((err) => {
                    console.error("Error: " + err);
                });
        })
    } catch (err) {
        console.log("Error: " + err);
    }
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello you');
        res.end();
    }
    if (req.url === '/api/securerandoms') {
        iMadeRandom();
        res.setHeader('Content-Type', 'application/json'); // so the browser can read it as json
        res.write(JSON.stringify(myJsonRandoms));
        res.end();
    }
});

server.on('connection', (sock) => {
    console.log('Client IP: ' + sock.remoteAddress);
})

server.listen(_portNo);
console.log('Listening on port ' + _portNo);