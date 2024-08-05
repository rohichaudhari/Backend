// http module
const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('set','setvalue');
    res.end('<h1>Welcome to Nodejs</h1>')
});

server.listen(1234, ()=>{
    console.log(`server start`)
});

