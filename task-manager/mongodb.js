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

    /* delete all users, which age is 27
    db.collection('users').deleteMany({
        age: 27
    }).then(res => console.log(res))
    .catch(er => console.log(er))*/

    db.collection('tasks').deleteOne({description: "test"}).then(res => console.log(res))
    .catch(er => console.log(er))
})