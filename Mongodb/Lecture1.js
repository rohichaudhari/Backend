// 1. start mongodb and connecting server
    // mongosh

//2. show databases
    // show dbs

// 3.create database and use
    // use databaseName  (ex. use student)

//4.create collections
    // db.createCollection('collectionName')
    // (ex. db.createCollection("data") )

//5.show collecton
    // db.collectionName.find()
    //db.colectionName.find("field name":"field type")
    //db.colectionName.findOne("field name":"field type")
   
//  6.insert data into collection  
        // insertOne

        // db.data.insertOne({
        //     "firstName":"rohini",
        //     "lastName":"chaudhari",
        //     "age":25,
        //     "hobbies":["reading","cooking"]
        // })

        // insertMany

        db.data.insertMany([
            {
                "firstName":"Payal",
                "LastName":"patel",
                "age":25,
                "courses":"frontend developer"
            },
            {
                "firstName":"Ganga",
                "LastName":"Gamit",
                "age":25,
                "courses":"full stack developer"
            },
            {
                "firstName":"Keni",
                "LastName":"kakadiya",
                "age":25,
                "Address":{
                    "city":"surat",
                    "state":"Gujarat"
                }
            }
        ])
    
