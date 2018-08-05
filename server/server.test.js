const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect({
                    error: 'Page not found.'
                })
                .end(done)
        });
    });

    describe('GET /users', () => {
        it('should return all users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(((res) => {
                    expect(res.body.users)
                    .toInclude({
                        name: 'Philip',
                        age: 22
                    });
                }))
                .end(done)
        });
    });
});
