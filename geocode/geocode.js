const request = require('request');
const geocode = {
    geocode: function geocode(address) {
        return new Promise((resolve, reject) => {
            request({
                url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
                json: true
            }, function(error, response, body) {
                if (error) {
                    reject(error);
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('invalid address format')
                } else if (body.status === 'OK') {
                    resolve({
                        address: body.results[0].formatted_address,
                        longitude: body.results[0].geometry.location.lng,
                        latitude: body.results[0].geometry.location.lat
                    })
                }
            });
        });
    }
};

module.exports = geocode;