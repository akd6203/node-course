// setTimeout(() => {
//     console.log('2 seconds are up!')
// },2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             longitude:0,
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Test', (data) => {
//     console.log(data)
// })


// const add = (x,y, callback) => {
//     setTimeout(()=> {
//         const sum = x+y
//         callback(sum)
//     }, 2000)
// }

// add(10,15, (result) => {
//     console.log(result)
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('This is an error', undefined)
        // callback(undefined, [6,3,4])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error)
    }
    console.log(result)
})