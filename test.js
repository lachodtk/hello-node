var test = require('tape');
var request = require('supertest');
var app = require('./app');

test('Correct message returned', function (t) {
  request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'Returned Code 200!');
      t.end();
    });
});
