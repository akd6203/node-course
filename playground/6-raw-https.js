const https = require('https')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-75&lon=45&appid=a55fb71ae90273d2eb4462a310a25d0c&units=metric'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) => {
    console.log('An error', error)
})
request.end()