const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const cityName = process.argv[2]

if(!cityName){
    console.log('Please provide an address')
}else{
    geocode(cityName, (error, {latitude, longitude, location} ={}) => {
        if(error){
            return console.log(error)
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location,'Weather Details')
            console.log(forecastData)
        })
    })

}
// const url = 'https://api.openweathermap.org/data/2.5/weather?q=mohali&appid=a55fb71ae90273d2eb4462a310a25d0c&units=metric'
// request({ url:url, json:true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to the weather app!')
//     }
//     else if(response.body.cod != 200){
//         console.log('Unable to find the location!')
//     }
//     else{
//         const main = response.body.main
//         const weather = response.body.weather[0]
//         console.log(weather.main+". It is currently "+main.temp+" degrees out. It feels like "+main.feels_like+" degrees out.")    
//     }
// })

// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RzLWFtYW5kZWVwIiwiYSI6ImNreG9lNG9jYjJpM2Eyb2tqMjE1Njk2cGMifQ.D5z0kIAxH-8-ohFTOQKsnw&limit=1'
// request({url:geocodeURL, json:true}, (error,response) => {
//     const long = response.body.features[0].center[0]
//     const lat = response.body.features[0].center[1]
//     console.log('longitude: '+ long)
//     console.log('latitude: '+ lat)
    // const w_url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=a55fb71ae90273d2eb4462a310a25d0c'
    
    // request({ url:w_url, json:true}, (error, response) => {
    //     const main = response.body.main
    //     const weather = response.body.weather[0]
    //     console.log(response.body.name.toUpperCase())
    //     console.log(weather.main+". It is currently "+main.temp+" degrees out. It feels like "+main.feels_like+" degrees out.")
    // })
// })

