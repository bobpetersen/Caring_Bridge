// checks for a URL in a piece of text
// will return true if there is a url in the text
// parameter is the text to check

// checks performed: checking for 'http' in the string
// checking for .com, .de, .cn, .net, .uk, .in at end of words
// if there is a gofundme or youcaring link, it will not be flagged

const checkURL = text => {
  // don't flag gofundme or youcaring
  if (/[gofundme|youcaring]/.test(text)) {
    return false;
  }
  // check for http in text
  else if (/http/.test(text)) {
    return true;
  } 
  // check for popular domain endings
  // if these strings (including the period) appear, will return true (spam)
  else if (/[.com|.de|.cn|.net|.uk|.in]/.test(text)) {
    return true;
  }
  // if haven't found anything, return false
  else {
    return false;
  }
}

module.exports = checkURL;