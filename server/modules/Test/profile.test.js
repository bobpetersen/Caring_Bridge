

const expect = require('chai').expect;

// const checkURL = require('../checkURL');


const checkURL = (str) => {
    return /^http:/i.test(str); 
}

checkURL('http:');


describe('checkURL module', () => {
    describe('edge cases', () => {
        it('should return null or false when passed an empty url', () => {
            expect(checkURL().to.equal(''));
        });
    });
    describe('normal cases', () => {
        it('should return true when passed a string starts with http:', () => {
            expect(checkURL().to.equal(/^http:/i));
        });
        it('should return true when passed a string starts with http://', () => {
            expect(checkURL().to.equal(/^http:\/\//i));
        });
        it('should return true when passed a string starts with http', () => {
            expect(checkURL().to.equal(/^http:/i+"www.caringbridge.com"));
        });
    });

})

