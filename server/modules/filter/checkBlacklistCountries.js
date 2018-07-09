const axios = require('axios');
const countries = require('./countries');

require('dotenv').config();

async function checkBlacklistCountries(ip) {
  // use api to get country from IP address
  try {
    let apiResponse = await axios.get(`http://api.ipstack.com/${ip}?access_key=${process.env.API_ACCESS_KEY}`);
    // if that country is on the blacklist, return true for spam
    if (countries.includes(apiResponse.data.country_name)) {
      return true;
    }
    else {
      return false;
    }
  } catch (error) {
    throw `ipstack GET ${error}`;
  };
}

module.exports = checkBlacklistCountries;