require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61d2e03fcbd3a72e940ff865').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async(id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('61d2e097cbd3a72e940ff867').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})