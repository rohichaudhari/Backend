const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('<h1>Welcome to Nodejs with fifth server</h1>')
});

server.listen(6789, ()=>{
    console.log(`server start  at http://localhost:6789`)
});