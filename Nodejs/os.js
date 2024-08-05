 const os = require('os');
// console.log(os.EOL);

// console.log(os.availableParallelism());
// =>16

// console.log(os.arch());
// =>x64

// console.log(os.constants);

// console.log(os.cpus());

// console.log(os.devNull);
// =>\\.\nul

// console.log(os.endianness());
// =>LE

// console.log(os.freemem());
// =>7703568384

// console.log(os.getPriority());
// =>0

// console.log(os.homedir());
//C:\Users\HEMANSHU

// console.log(os.hostname());
// =>LAPTOP-L9K282LC

// console.log(os.loadavg());
// =>[ 0, 0, 0 ]

// console.log(os.machine());
// =>x86_64

// console.log(os.networkInterfaces());

// console.log(os.platform());
// =>win32

// console.log(os.release());
// =>10.0.22631

// console.log(os.setPriority());//dout

// console.log(os.tmpdir());
// =>C:\Users\HEMANSHU\AppData\Local\Temp

// console.log(os.totalmem());
// =>16785235968

// console.log(os.type());
// =>Windows_NT

// console.log(os.uptime());
// =>1909656.812

// console.log(os.userInfo());

// console.log(os.version());
// =>Windows 11 Home Single Language

const hello=require('./add');
const {sum}=require('./add')
const{mul}=require('./add');
console.log(sum(11,11))
console.log(mul(11,11))