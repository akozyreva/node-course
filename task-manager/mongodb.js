// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databseName = 'task-manager'

// connect to the client
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (er, client) => {
    if (er) {
        return console.log(er)
    }

   console.log("Connected correctly!")
   // create new db if it doesn't exist
   const db = client.db(databseName)

   /*db.collection('users').insertOne({
       name: 'Anna', 
       age: 26
   }, (er, res) => {
       if(er) {
           return console.log("Unable to insert user")
       }
       // it returns back the successful result - documentation, which was inserted
       console.log(res.ops)
   }) 

   db.collection('users').insertMany([
       {
         name: 'Jane',
         age: 28
       },
       {
        name: 'Gunter',
        age: 27
       }
   ], (er, res) => {
        if(er) {
            return console.log("Unable to insert documentation")
        }

        console.log(res.ops)
   })
   */
  db.collection('tasks').insertMany([
      {
          description: 'test',
          completed: true
      },
      { 
        description: 'test2',
        completed: true
      },
      {
        description: 'test3',
        completed: true
      }
  ], (er, res) => {
      if(er) {
          return console.log("Unable to create tasks")
      } 
      console.log(res.ops)
  })
   
})
