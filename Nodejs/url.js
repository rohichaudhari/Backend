const http=require('http');
const data=[
    {
        id:1,
        name:'john',
        age:55,
        gender:'Male'
    },
    {
        id:2,
        name:'joly',
        age:15,
        gender:'Female'
    },
    {
        id:3,
        name:'novak',
        age:25,
        gender:'Female'
    },
]

const server=http.createServer();
server.on("request",(req,res)=>{
    console.log(req.url);
    let item=req.url.split('/');
    // console.log(item);
    if(item[1]==="user")
    {
        res.setHeader("Content-type","text/html");
        res.write("<h1>this is user  page</h1>");
        res.end();
    }
    else  if(item[1]==="Admin")
        {
            res.setHeader("Content-type","text/html");
            res.write("<h1>this is Admin  page</h1>");
            res.end();
        }
    else if(item[1]==="friends")
    {
        res.setHeader("Content-type","application/json");
        if(item.length===3){
            let Frindex=+item[2];
            res.write(JSON.stringify(data.filter(e=>e.id===Frindex)))
        }
    }
        else
        {
            res.write(JSON.stringify(data));
            res.end();
        }
    
})
server.listen(1122,()=>{
    console.log(`server start at http://127.0.0.1:1122`);
})