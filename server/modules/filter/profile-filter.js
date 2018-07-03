const checkURL = require('./checkURL');
const checkBlacklistCountries = require('./checkBlacklistCountries');

async function profileFilter(profile) {
    //initialize object that will be returned after checks
    let result = {
        status: false,
        reason: [],
    }
    //if a URL is found in the bio, mark as spam and update reason
    if (checkURL(profile.bio)) {
        result.status = true;
        result.reason.push('URL was found in bio');
    }
    //if the profile was made from one of the blacklisted countries, mark as spam and update reasons
    let fromBlacklistCountry = await checkBlacklistCountries(profile.ip);
    if (fromBlacklistCountry) {
        result.status = true;
        result.reason.push('Profile was created from a blacklisted country');
    }
    //if the profile passes all the checks, the default of false with empty reasons will be returned
    return result;
}

module.exports = profileFilter;