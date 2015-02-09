var chai = require('chai');
var expect = chai.expect;

describe('Github API simulation', function(){

	var host = 'http://localhost:9999';
	
	before(function(){
		casper.start(host);
	});

	it('Will return data in JSON format', function(){
		casper.then(function(response){
			expect('body').to.have.text('Github API Simulation');
		});
	});

	it('Will return JSON for a particular user', function(){
		casper.thenOpen(host + '/users/kierangoodacre', function(response){
			expect(response.headers.get('Access-Control-Allow-Origin')).to.equal('*');
			expect(response.headers.get('Content-Type')).to.equal('application/json; charset=utf-8');
			expect('body').to.include('"login": "kierangoodacre"')
		});
	});


});