const day2OS = require('./simpleOS');


console.log('** Opg 1 **')
console.log(day2OS);

console.log('** Opg 2 **');
const DOS_Detector = require('./dosDetector');
const dos = new DOS_Detector(1000);

dos.on('DOS_Detector', (e) => console.log('Event', e))

dos.addUrl('http://1');
dos.addUrl('http://2');
dos.addUrl('http://3');

setTimeout(() => dos.addUrl('http://1'), 500);
setTimeout(() => dos.addUrl('http://2'), 500);
