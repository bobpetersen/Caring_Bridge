const axios = require('axios');
const countries = require('./countries');

require('dotenv').config();

function checkBlacklistCountries(ip) {
  axios.get(`http://api.ipstack.com/${ip}?access_key=${process.env.API_ACCESS_KEY}`
  ).then(response => {
    if (countries.includes(response.data.country_name)) {
      return true;
    }
    else {
      return false;
    }
  }).catch(error => {
    console.log(error);
    return false;
  });
}

module.exports = checkBlacklistCountries;