// import filters
const profileFilter = require('./profile-filter');
const siteFilter = require('./siteFilter');

// import models
const Profile = require('../../models/Profile');
const Scan = require('../../models/Scan');
const Site = require('../../models/Site');

// main filter function 
async function runFilter() {
  try {
    // recentScan is array of the most recent scan
    let recentScan = await Scan.find({}).sort({scanTime: -1}).limit(1);
    let recentScanDate;
    if (recentScan.length === 0) {
      // if this is the first scan ever, let the starting scan point be 1 day ago
      recentScanDate = new Date(new Date() - 86400000);
    }
    else {
      // otherwise, the starting scan point will be the ending scan point of the previous scan
      recentScanDate = recentScan[0].scanTime;
    }
    let currentScanDate = new Date();

    // scan Profiles
    let profilesToScan = await Profile.find({createdAt: {$gte: recentScanDate, $lt: currentScanDate}});
    console.log('profileToScan',profilesToScan);
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
    console.log('siteToScan:',sitesToScan);
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
    await Scan.create([{ scanTime: currentScanDate, sitesScanned: (profilesToScan.length  + sitesToScan.length)}]);
  } catch (error) {
    console.log(error);
  }
}

module.exports = runFilter;
