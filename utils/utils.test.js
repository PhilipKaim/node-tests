const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('Should adding two numbers', () => {
            var res = utils.add(10, 44);
        
            expect(res).toBe(54).toBeA('number');
        });
    });

    describe('#square', () => {
        // async testing
        it('Should square a number', (done) => {
            utils.square(6, (res) => {
                expect(res).toBe(36).toBeA('number');
                done();
            });
        });
    });
});

it('should veryfy first and last names are set', () => {
    var res = utils.setName({
        age: 22,
        location: 'Tampa, FL'
    }, 'Philip Kaim');

    expect(res).toInclude({
        firstName: 'Philip',
        lastName: 'Kaim'
    }).toBeA('object');
});