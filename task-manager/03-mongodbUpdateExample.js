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

   /*db.collection('users').updateOne({
       _id: new ObjectID("5cf6770cd2102f1ca0f77b9d")
   }, {
       $set: {
           name: 'Mike'
       }
   }).then( (res) => {
    console.log(res)
   }).catch( er => console.log(er))

   // example of incrementing variable
   db.collection('users').updateOne({
       _id: new ObjectID("5cf6770cd2102f1ca0f77b9d")
   }, {
       $inc: {
           age: 1
       }
   }).then( (res) => {
    console.log(res)
   }).catch( er => console.log(er))
   */
  db.collection('users').updateMany({age: {$gt: 27} }, { $min: {age: 27} } )
  .then( res => console.log(res))
  .catch( er => console.log(er))

})