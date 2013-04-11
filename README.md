#Mocha guideline

Basic aritmetic operations server created with node.js & Express. Tested using Mocha, Chai and SuperAgent.

##The server
You can run the server by executing app.js: "node app.js"

The server can handle GET and POST operations for sumar, restar, multiplicar and dividir.

	Example of GET: http://localhost:3000/sumar?op1=2&op2=4
	Example of POST: req.body = { op1: 14, op2: 21 }, the result will be with format: res.body = { resultat: 35 }.

##The tests
The test framework used to perform the tests is Mocha. 

The tests are in the folder "test".

* operacionsAritmetiques.test.js: The unit tests for operacionsAritmetiques.js
* app.test.js: The integration tests for the server, using the module "superagent" to do the requests.

To run the tests: "mocha test" or just "make test"

##Modules
[Mocha](http://visionmedia.github.com/mocha/)

[Chai](http://chaijs.com/api/bdd/)

[Superagent-Module](https://github.com/visionmedia/superagent)

[Superagent-API](http://visionmedia.github.com/superagent/)