const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=a55fb71ae90273d2eb4462a310a25d0c&units=metric'
    request({url, json:true}, (error, { body } ) => {
        if(error){
            callback('Unable to connect to the weather service', undefined)
        }
        else if(body.cod != 200){
            callback('Unable to find weather for given location', undefined)
        }
        else{
            callback(undefined, 'It is '+body.main.temp+' degrees outside. It feels like '+ body.main.feels_like +' outside in '+ body.name) 
        }
    })
}

module.exports = forecast