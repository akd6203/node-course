const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.port || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.status(503).send('GET REQUESTS ARE DISABLED')
//     }else{
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(3000, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')


// const myFunction = async (req, res) => {
//     const token = jwt.sign({ _id: 'abc123'},'thisismynewcourse', { expiresIn: '0 seconds'})
//     console.log(token)    

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('61d6e6a81627c51fc8bed3c0')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('61d6e4dd15d3f22e781380ec')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()