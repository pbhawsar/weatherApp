const request = require('request');
const getWeather = {
    getWeather: function geocode(lat, long) {
        return new Promise((resolve, reject) => {
            request({
                url: `https://api.darksky.net/forecast/82619e570ab3ce516fe9019d5e1e9923/${lat},${long}`,
                json: true
            }, function(error, response, body) {
                if (error) {
                    reject('unable to contact forecast.io server.');
                } else if (response.statusCode === 400) {
                    reject('unable to fetch weather');
                } else if (response.statusCode === 200) {
                    resolve(body.currently.temperature);
                }
            });
        });
    }
}


module.exports = getWeather;