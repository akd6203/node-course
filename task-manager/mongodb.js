// CRUD Operations 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// ////   OR  ////

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {'useNewUrlParser':true}, (error, client) => {
    if(error){
        console.log('Unable to connect to the database!');
    }
    // // console.log('Conneted correctly!');

    db = client.db(databaseName)
    // // // DELETE
    // db.collection('users').deleteMany(
    //     {age:28}
    // ).then( (result) => {
    //     console.log(result.deletedCount, 'users deleted!')
    // }).catch( (error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteOne(
    //     {_id:new ObjectID('61cec0fc018ce73114aa5ab7')}
    // ).then( (result) => {
    //     console.log(result.deletedCount, 'users deleted!')
    // }).catch( (error) => {
    //     console.log(error)
    // })

    // // UPDATE 
    // db.collection('tasks').updateMany(
    //     {completed:true},
    //     {
    //         $set:{completed:false}
    //     }
    // ).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id:new ObjectID('61cebd753396fb29cc1b5584')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    //     // $set: {
    //     //     name:'Mike',
    //     // }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({'_id':new ObjectID('61cec5a673ce4c11705ee2d5')}, (error, user) => {
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(user)
    // });

    // db.collection('users').find({age:24}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Jen',
    //     age:24,
    // }, (error, result) => {
    //     if(error){
    //         console.log("Couldn't insert!");
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {'name':'Jenny',age:39},
    //     {'name':'Joe',age:28,status:true},
    // ], (error, result) => {
    //     if(error){console.log(error)}
    //     console.log(result.result)
    // })

    // db.collection('tasks').insertMany([
    //     {description:'Play Candy Crush', completed:false},
    //     {description:'Read book', completed:true},
    //     {description:'Cooking', completed:false},
    // ], (error, result) => {
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(result.ops)
    // })

})