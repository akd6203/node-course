// const { connect } = require('mongoose')
const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex:true
})

// const me = new User({
//     name:'     jerry    ',
//     email:'Jerry@gmail.com',
//     password:'jerry#123'
// })
// me.save().then( (result) =>{
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    description:{
        type: String,
        trim:true,
        required:true
    },
    completed:{
        type: Boolean,
        default:false
    }
})

// const t1 = new Task({
//     description:'Learn Angular           '
// })

// t1.save().then(() =>{
//     console.log(t1)
// }).catch((error) => {
//     console.log(error)
// })
