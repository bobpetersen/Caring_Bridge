const checkURL = require('./checkURL');
const Journal = require('../../models/Journal');

// checks if a site is spam
// return an object {status: true if spam and false if not, reason: array of strings}
// possible reasons: 'Contains URL in My Story', 'Contains URL in first Journal Entry'
async function siteFilter(site) {
  let result = { status: false, reason: [] }
  if (checkURL(site.description)) {
    result.status = true;
    result.reason.push('Contains URL in My Story');
  }
  let queryResults = await Journal.find({ 'siteId': site._id }).sort({ 'createdAt': 1 }).limit(1);
  if (queryResults[0]) {
    try {
      let URLResult = await checkURL(queryResults[0].body);
      if (URLResult) {
        result.status = true;
        result.reason.push('Contains URL in first Journal Entry');
      }
    } catch (error) {
      console.log('journal checking failed', error);
    }
  }

  return result;
}

module.exports = siteFilter;