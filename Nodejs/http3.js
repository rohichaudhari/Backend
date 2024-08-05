const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('<h1>Welcome to Nodejs with fourth server</h1>')
});

server.listen(5678, ()=>{
    console.log(`server start  at http://localhost:5678`)
});