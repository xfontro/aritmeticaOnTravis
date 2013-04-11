var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var superagent = require('superagent');
var util = require('util');

describe('Integration tests for app.js :', function() {
	describe('POST /sumar', function() {
		var agent = superagent.agent();

	    before(function (done) {
			var expressapp = require('../app.js');
	        done();
	    });

		it('The response is json', function () {
			agent
				.post('http://localhost:3000/sumar')
				.send({ op1: 1, op2: 1 })
				.end(function (res) {
					res.headers['content-type'].should.contain('application/json');
				});
		});

		it('The response body is ok when request is ok', function () {
			agent
				.post('http://localhost:3000/sumar')
				.send({ op1: 17, op2: 28 })
				.end(function (res) {
					res.body.resultat.should.equals(45);
				});
		});

		it('The response body is an error when request is NOT ok', function () {
			agent
				.post('http://localhost:3000/sumar')
				.send({ op1: 17, opo: 28 })
				.end(function (res) {
					res.should.have.property('statusCode').that.equals(400);
				});
		});
	});
});