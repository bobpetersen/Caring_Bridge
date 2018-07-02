// import filters
const profileFilter = require('./profile-filter');
const siteFilter = require('./siteFilter');
const checkBlacklistCountries = require('./checkBlacklistCountries');

// import models
const Profile = require('../../models/Profile');
const Scan = require('../../models/Scan');
// const Site = require('../../models/Site');

// db.getCollection('scan').insert([{scanTime: new Date("<1990-01-07T01:00:00Z>"), sitesScanned: 14}])


// main filter function 
async function runFilter() {

  try {
    ipTest('27.106.0.0');
    // await Scan.create([{ scanTime: new Date("1990-01-10T01:00:00Z"), sitesScanned: 12 }]);
  } catch (error) {
    console.log(error);
  }
}

async function ipTest(ip) {
  checkBlacklistCountries(ip).then(resp => console.log(resp, 2));
}

module.exports = runFilter;
