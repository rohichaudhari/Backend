const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('<h1>Welcome to Nodejs with second server</h1>')
});

server.listen(3456, ()=>{
    console.log(`server start`)
});
