const checkURL = require('./checkURL');
const checkBlacklistCountries = require('./checkBlacklistCountries');

module.exports = ((profile) => {
    //initialize object that will be returned after checks
    let result = {
        status: false,
        reasons: [],
    }
    //if a URL is found in the bio, mark as spam and update reasons
    if (checkURL(profile.bio)) {
        result.status = true;
        result.reasons.push('URL was found in bio');
    }
    //if the profile was made from one of the blacklisted countries, mark as spam and update reasons
    if (checkBlacklistCountries(profile.ip)) {
        result.status = true;
        result.reasons.push('Profile was created from a blacklisted country');
    }
    //if the profile passes all the checks, the default of false with empty reasons will be returned
    return result;
});