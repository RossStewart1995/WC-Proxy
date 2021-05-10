var expect  = require('chai').expect;
const server = require('../index.js');
const request = require('supertest')(server)

function delay(interval) 
{
   return it('should delay', done => 
   {
      setTimeout(() => done(), interval)

   }).timeout(interval + 100) // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}

it('Return status code 200', function(done) {
        request.get('/')
        .end((err, response) => {
                expect(response.statusCode).to.equal(200);
        });
        done();
});

delay(1000);

it('Return status code 400 when calling /add with no params', function(done) {
    request.get('/add')
    .end((err, response) => {
            expect(response.statusCode).to.equal(400);
    });
    done();
});

delay(1000);

it('Return status code 200 when calling /add with params', function(done) {
    request.get('/add?x=4&y=5')
    .end((err, response) => {
            expect(response.statusCode).to.equal(200);
    });
    done();
});

delay(1000);

it('Return status code 400 when calling /sub with no params', function(done) {
    request.get('/sub')
    .end((err, response) => {
            expect(response.statusCode).to.equal(400);
    });
    done();
});

delay(1000);

it('Return status code 200 when calling /sub with params', function(done) {
    request.get('/sub?x=4&y=5')
    .end((err, response) => {
            expect(response.statusCode).to.equal(200);
    });
    done();
});

delay(1000);

it('Return status code 400 when calling /mul with no params', function(done) {
    request.get('/mul')
    .end((err, response) => {
            expect(response.statusCode).to.equal(400);
    });
    done();
});

delay(1000);

it('Return status code 200 when calling /mul with params', function(done) {
    request.get('/mul?x=4&y=5')
    .end((err, response) => {
            expect(response.statusCode).to.equal(200);
    });
    done();
});

delay(1000);

it('Return status code 400 when calling /square with no params', function(done) {
    request.get('/square')
    .end((err, response) => {
            expect(response.statusCode).to.equal(400);
    });
    done();
});

delay(1000);

it('Return status code 200 when calling /square with params', function(done) {
    request.get('/square?x=4')
    .end((err, response) => {
            expect(response.statusCode).to.equal(200);
    });
    done();
});

delay(1000);

it('Return status code 400 when calling /exponent with no params', function(done) {
    request.get('/exponent')
    .end((err, response) => {
            expect(response.statusCode).to.equal(400);
    });
    done();
});

delay(1000);

it('Return status code 200 when calling /exponent with params', function(done) {
    request.get('/exponent?num=44&exp=4')
    .end((err, response) => {
            expect(response.statusCode).to.equal(200);
    });
    done();
});

delay(1000);

it('Return status code 500 when calling /modulo with no params', function(done) {
    request.get('/modulo')
    .end((err, response) => {
            expect(response.statusCode).to.equal(500);
    });
    done();
});

delay(1000);

it('Return status code 500 when calling /modulo with zero as val', function(done) {
    request.get('/modulo?val=0&mod=3')
    .end((err, response) => {
            expect(response.statusCode).to.equal(500);
    });
    done();
});

delay(1000);

it('Return status code 200 when calling /modulo with params', function(done) {
    request.get('/modulo?val=5&mod=3')
    .end((err, response) => {
            expect(response.statusCode).to.equal(200);
    });
    done();
});

delay(1000);

