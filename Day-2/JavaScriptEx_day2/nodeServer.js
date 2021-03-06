const http = require('http');
const day2OS = require('./simpleOS');
const DOS_Detector = require('./dosDetector');
const dos = new DOS_Detector(1000);

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(day2OS));
    
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  console.log('client-IP: ' + sock.remoteAddress);
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
dos.on('DOS_Detector', (e) => console.log('Event', e))

dos.addUrl('http://1');
dos.addUrl('http://2');
dos.addUrl('http://3');

setTimeout(() => dos.addUrl('http://1'), 500);
setTimeout(() => dos.addUrl('http://2'), 500);