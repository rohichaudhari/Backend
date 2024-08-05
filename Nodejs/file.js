const { error } = require('console')
const fs =require('fs')

// 1)open file
// fs.open('./hello.txt',(err,result)=>{
//     if(err)
//         console.log(err)
//     else
//     console.log("file open sucessfull")
// })

// let data=fs.openSync("./hello.txt");
// console.log("file opened");


// 2)write file
// let data=`On July 27, 2024, UNESCO added the Sado gold and silver mines in Japan to its World Heritage List after South Korea withdrew its objections. This inclusion is significant due to the historical context of forced labor during World War ..`

// fs.writeFile('./hello.txt',data,(err,result)=>{
//     if(err)
//         console.log(err);
//     else
//     console.log('file sucessfull write');
// })

// sync
// fs.writeFileSync('./data1.txt',data);
// console.log('write data sync sucessfully')


// 3)read file
// fs.readFile('./data1.txt','utf-8',(error,result)=>{
//     if(error)
//         console.log(error); 
//     else
//         console.log(result);
// })

// sync
// let a =fs.readFileSync('./hello.txt','utf-8');
// console.log(a);

// 4)append method
// area=`Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`
// fs.appendFile('./hello.txt',area,(err,result)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(result)
// })

// let b=fs.appendFileSync('./data1.txt',area);
// console.log(b);


// 5)rename






// fs.renameSync('./hello.txt','./data.txt');
// console.log('rename sucessfull');
