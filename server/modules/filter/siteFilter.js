const checkURL = require('./checkURL');
const Journal = require('../../models/Journal');

// checks if a site is spam
// return an object {status: true if spam and false if not, reason: array of strings}
// possible reasons: 'Contains URL in My Story', 'Contains URL in first Journal Entry'
const siteFilter = (site) => {
  let result = {status: false, reason: []}
  if (checkURL(site.description)) {
    result.status = true;
    result.reason.push('Contains URL in My Story');
  }
  // Journal.find({'siteId':945702}).sort({'createdAt':1}).limit(1)
  //   .then(results => {
  //     console.log('here')
  //     console.log(results);
  //   }).catch(error => {
  //     console.log('hereee');
  //     console.log(error);
  //   });
  console.log('heree');
  return result;
}

siteFilter();

module.exports = siteFilter;