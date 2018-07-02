const axios = require('axios');
const countries = require('./countries');

require('dotenv').config();

async function checkBlacklistCountries(ip) {
  // use api to get country from IP address
  try {
    let apiResponse = await axios.get(`http://api.ipstack.com/${ip}?access_key=${process.env.API_ACCESS_KEY}`);
    // if that country is on the blacklist, return true for spam
    console.log(apiResponse.data);
    if (countries.includes(apiResponse.data.country_name)) {
      return true;
    }
    else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  };
}

module.exports = checkBlacklistCountries;