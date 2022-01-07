
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0){
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

// const doWork = async () => {
//     // throw new Error('Error occurred')
//     return 'Aman'
// }

// // INSTEAD OF // //
// add(1,1).then((sum) => {
//     console.log(sum)
//     return add(sum, 2)
// }).then((sum2) => {
//     console.log(sum2)
//     return add(sum2, 4)
// }).then((sum3) => {
//     console.log(sum3)
// }).catch((e) => {
//     console.log(e)
// })

// // WILL USE ASYNC AWAIT // //
const doWork = async () => {
    const sum = await add(1, 3)
    const sum2 = await add(sum, -4)
    const sum3 = await add(sum2, 8)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})