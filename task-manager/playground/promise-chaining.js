require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('61d2d9689762c71254c629cf', {age:31}).then((user) => {
    console.log(user)
    return User.countDocuments({ age:33 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
