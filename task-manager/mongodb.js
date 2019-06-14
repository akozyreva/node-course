// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')

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

   // find individual document
   db.collection('users').findOne({name: 'Anna', age: 1}, (err, user) => {
    if (err) {
        return console.log('Unable to fetch')
    } 
    console.log(user)
   })

   // how to find queries, using id
   db.collection('users').findOne({"_id" : new ObjectID("5d03623f70d9431b0800e85c")}, (err, user) => {
    if (err) {
        return console.log('Unable to fetch')
    } 
    console.log(user)
   })

   // how to find - return a cursor, which provide toArray method to return an array
   db.collection('users').find({name: 'Anna'}).toArray( (err, users) => {
       console.log(users)
   })

   // returns the count of occurencies
   db.collection('users').find({name: 'Anna'}).count( (err, count) => {
    console.log(count)
    })

    // find the last task
    db.collection('tasks').find().limit(1).sort({_id : 1}).toArray( (err, task) => {
        console.log(task)
    })
    
    // find the tasks, that aren't completed
    db.collection('tasks').find({completed: true}).toArray( (err, tasks) => {
        console.log(tasks)
    })
})
