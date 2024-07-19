// show dbs
// use students
// show collections
db.data.insertMany([
    {
    "firstName":"Ragini",
    "lastname":"chaudhari",
    "age":25
    },
    {
       "firstname":"kinjal",
       "lastName":"chaudhari",
       "hobbies":["dancing","cooking","reading"]
    }
        
]);
db.data.find()
// use node
// show collections
db.book.find()
db.book.find({"pages":{$eq:254}})
db.userdata.find({})
db.userdata.find({"name":{$eq:"Mrs. Dennis Schulist"}});
db.userdata.find({"id":{$ne:3}});
db.userdata.find({"id":{$gt:5}});
db.userdata.find({"id":{$gte:5}});
db.userdata.find({"id":{$lt:3}});
db.userdata.find({"id":{$lte:3}});
db.userdata.find({"id":{$in:[1,3,5]}});
db.userdata.find({"id":{$nin:[1,3,5]}});

db.userdata.find({$and:[{"username":"Antonette"},{"id":{$lte:3}}]});
db.userdata.find({$or:[{"username":"Antonette"},{"id":{$lte:3}}]});
db.userdata.find({$nor:[{"username":"Antonette"},{"id":{$lte:3}}]});
db.userdata.find({"name":{$not:{$eq:"Chelsey Dietrich"}}});




