// show dbs
// use node
// show collections
db.userdata.find()
// $match
// db.userdata.find({"id":3});
db.userdata.aggregate([{
    $match:{
        name:"Clementine Bauch"
    }
}])

// project
// db.userdata.find({"id":{$gte:5}},{name:1,id:1});
// db.userdata.find({},{name:1,id:1});
db.userdata.aggregate([{
    $project:{
        name:1,
        id:1
    }
}, 
{
    $match:{id:{$gte:6}}
}
])
db.userdata.find({}).project({name:1,id:1});
db.userdata.find({}).select({id:1});

// count()
db.userdata.find({}).count()
db.userdata.aggregate([{
    $match:{$id:{$gte:5}}
},
])
    
   
// skip() limit()    
db.userdata.find({}).skip(5);
db.userdata.find({}).skip(5).limit(2);

db.userdata.find({}).limit(2);
db.userdata.find({}).limit(2).skip(7);

db.userdata.aggregate([
{$limit:5},
])

db.userdata.aggregate([
{$limit:5},
{$skip:3},
])

// sort()
db.userdata.find({}).sort({name:-1});
db.userdata.find({}).sort({name:1});




