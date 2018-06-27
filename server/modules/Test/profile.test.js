

const expect = require('chai').expect;

// Unit Testing for .com .net .cn .co .uk .in 
describe('checkURL module', () => {
    describe('edge cases', () => {
        it('should return true if function contains an http://', () => {
            expect(checkURL('http://').to.be.true);
        });
        it('should return true if function contain an www.', () => {
            expect(checkURL('www.').to.be.true);
        });
    })

    describe('normal cases for .com', () => {
        it('should return true when passed a string starts with http:// and ends with .com', () => {
            expect(checkURL('http://test.com').to.be.true);
        });
        it('should return true when passed a string starts with test and ends with .com', () => {
            expect(checkURL('test.com').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .com with text surrounding link', () => {
            expect(checkURL('This is a text to test if theres a link http://test.com surrounding a link').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .com with camel case text with a integer', () => {
            expect(checkURL('http://testSubjectNumber2.com').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .com with all integers', () => {
            expect(checkURL('http://111111.com').to.be.true);
        });
    });

    describe('normal cases for .net', () => {
        it('should return true when passed a string starts with http:// and ends with .net', () => {
            expect(checkURL('http://test.net').to.be.true);
        });
        it('should return true when passed a string starts with test and ends with .net', () => {
            expect(checkURL('test.net').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .net with text surrounding link', () => {
            expect(checkURL('This is a text to test if theres a link http://test.net surrounding a link').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .net with camel case text with a integer', () => {
            expect(checkURL('http://testSubjectNumber2.net').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .net with all integers', () => {
            expect(checkURL('http://111111.net').to.be.true);
        });
    });

    describe('normal cases for .cn', () => {
        it('should return true when passed a string starts with http:// and ends with .cn', () => {
            expect(checkURL('http://test.cn').to.be.true);
        })
        it('should return true when passed a string starts with test and ends with .cn', () => {
            expect(checkURL('test.cn').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .cn with text surrounding link', () => {
            expect(checkURL('This is a text to test if theres a link http://test.cn surrounding a link').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .cn with camel case text with a integer', () => {
            expect(checkURL('http://testSubjectNumber2.cn').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .cn with all integers', () => {
            expect(checkURL('http://111111.cn').to.be.true);
        });
    });

    describe('normal cases for .co', () => {
        it('should return true when passed a string starts with http:// and ends with .co', () => {
            expect(checkURL('http://test.co').to.be.true);
        });
        it('should return true when passed a string starts with test and ends with .co', () => {
            expect(checkURL('test.co').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .co with text surrounding link', () => {
            expect(checkURL('This is a text to test if theres a link http://test.co surrounding a link').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .co with camel case text with a integer', () => {
            expect(checkURL('http://testSubjectNumber2.co').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .co with all integers', () => {
            expect(checkURL('http://111111.co').to.be.true);
        });
    });

    describe('normal cases for .uk', () => {
        it('should return true when passed a string starts with http:// and ends with .uk', () => {
            expect(checkURL('http://test.uk').to.be.true);
        })
        it('should return true when passed a string starts with test and ends with .uk', () => {
            expect(checkURL('test.uk').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .uk with text surrounding link', () => {
            expect(checkURL('This is a text to test if theres a link http://test.uk surrounding a link').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .uk with camel case text with a integer', () => {
            expect(checkURL('http://testSubjectNumber2.uk').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .uk with all integers', () => {
            expect(checkURL('http://111111.uk').to.be.true);
        });
    });

    describe('normal cases for .in', () => {
        it('should return true when passed a string starts with http:// and ends with .in', () => {
            expect(checkURL('http://test.in').to.be.true);
        });
        it('should return true when passed a string starts with test and ends with .in', () => {
            expect(checkURL('test.in').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .in with text surrounding link', () => {
            expect(checkURL('This is a text to test if theres a link http://test.in surrounding a link').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .in with camel case text with a integer', () => {
            expect(checkURL('http://testSubjectNumber2.in').to.be.true);
        });
        it('should return true when passed a string starts with http:// and ends with .in with all integers', () => {
            expect(checkURL('http://111111.in').to.be.true);
        });
    })

})

