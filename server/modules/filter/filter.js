// import filters
const profileFilter = require('./profile-filter');
const siteFilter = require('./siteFilter');

// import models
const Profile = require('../../models/Profile');
const Scan = require('../../models/Scan');
const Site = require('../../models/Site');
// const Site = require('../../models/Site');

// db.getCollection('scan').insert([{scanTime: new Date("<1990-01-07T01:00:00Z>"), sitesScanned: 14}])


// main filter function 
async function runFilter() {
  try {
    // recentScan is array of the most recent scan
    let recentScan = await Scan.find({}).sort({scanTime: -1}).limit(1);
    let recentScanDate = recentScan[0].scanTime;
    // this line needs to be changed to the following 
    // let currentScanDate = new Date();
    let currentScanDate = new Date(recentScanDate.getTime() + 864000000);

    // scan Profiles
    let profilesToScan = await Profile.find({createdAt: {$gte: recentScanDate, $lt: currentScanDate}});
    // console.log(profilesToScan);
    for (profile of profilesToScan) {
      let profileResult = await profileFilter(profile);
      if (profileResult.status) {
        let profileUpdated = {...profile._doc, audit_data: {
          flagged: true,
          reason: profileResult.reason,
          result: '',
          auditedBy: '',
          scannedAt: currentScanDate,
        }, isDeleted: '0'};
        await Profile.findByIdAndUpdate(profile._id, profileUpdated);
      }
    }

    // scan Sites
    let sitesToScan = await Site.find({createdAt: {$gte: recentScanDate, $lt: currentScanDate}});
    for (site of sitesToScan) {
      let siteResult = await siteFilter(site);
      if (siteResult.status) {
        let siteUpdated = {...site._doc, audit_data: {
          flagged: true,
          reason: siteResult.reason,
          result: '',
          auditedBy: '',
          scannedAt: currentScanDate,
        }, isDeleted: '0'};
        await Site.findByIdAndUpdate(site._id, siteUpdated);
      }
    }

    // create new scan
    await Scan.create([{ scanTime: currentScanDate, sitesScanned: profilesToScan.length }]);
  } catch (error) {
    console.log(error);
  }
}

module.exports = runFilter;
