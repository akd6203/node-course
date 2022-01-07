const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}
////////// CHANING /////////////
/// Replace following with chaining ////

// add(3,4).then((sum) => {
//     console.log(sum)

//     add(sum,10).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).then((e) => {
//     console.log(e)
// })

add(1,1).then((sum) => {
    console.log(sum)
    return add(sum, 2)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 4)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})


// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('OOPs something went wrong!')
//         // resolve([10,394,8])
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('success!' , result)
// }).catch((error) =>{
//     console.log('Error!' , error)
// })