var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('Testing operacionsAritmetiques API:', function() {
    var operacionsAritmetiques;

    before(function (done) {
        operacionsAritmetiques = require('../operacionsAritmetiques');
        done();
    });

    describe('| Add:', function() {    
        it('1 plus 1 is 2', function() {
            operacionsAritmetiques.sumar(1, 1, function (err, res) {
                res.should.equals(2);
                should.not.exist(err);
            }); 
        });

        it('46 plus string is an error', function() {
            operacionsAritmetiques.sumar(46, 'string', function (err, res) {
                should.not.exist(res);
                err.should.have.property('errorCode').that.equals(400);
            });
        });
    });

    describe('| Substract:', function() {
        it('1 minus 1 is 0', function() {
            operacionsAritmetiques.restar(1, 1, function (err, res) {
                res.should.equals(0);
                should.not.exist(err);
            }); 
        });

        it('-10 minus 17 is -27', function() {
            operacionsAritmetiques.restar(-10, 17, function (err, res) {
                res.should.equals(-27);
                should.not.exist(err);
            }); 
        });
    });

    describe('| Multiply:', function() {
        it('5 multiplied by 5 is 25', function() {
            operacionsAritmetiques.multiplicar(5, 5, function (err, res) {
                res.should.equals(25);
                should.not.exist(err);
            }); 
        });
    });

    describe('| Divide:', function() {
        it('15 divided by 5 is 3', function() {
            operacionsAritmetiques.dividir(15, 5, function (err, res) {
                res.should.equals(3);
                should.not.exist(err);
            }); 
        });

        it('0 divided by 5 is an error', function() {
            operacionsAritmetiques.dividir(0, 0, function (err, res) {
                should.not.exist(res);
                err.should.have.property('errorCode').that.equals(400);
            });
        });
    });

});