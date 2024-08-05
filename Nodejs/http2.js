const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('<h1>Welcome to Nodejs with third server</h1>')
});

server.listen(4567, ()=>{
    console.log(`server start`)
});