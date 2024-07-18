// update and delete
 db.data.insertOne({"name":"darshana","age":25,"city":"vyara"});

//  updateOne
db.data.updateOne({"name":"darshana"},{$set:{"village":"sea-shor","age":10}},{upsert:true});

//updateMany()
db.data.updateMany({},{$set:{"course":"full-stack"}},{upsert:true});

// delete one
db.data.deleteOne({"name":"darshana"});

//deleteMany
db.data.deleteMany({"lastName":"chaudhari"});

// drop collection
db.collection_name.drop();

//drop database


