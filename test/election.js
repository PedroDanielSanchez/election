
// To run the tests :  $ truffle test

// Simulate client side interaction in Javascript
// using Mocha and Chai. 

// Create contract abstraction for Truffle
var Election = artifacts.require("../Election.sol");

contract("Election", function(accounts) {
	// This declaration injects all the test accounts
	// in the development environment

	// Test that contract was initialized with the correct number of candidates
    // The "it() ..." is from Mocha testing framework

    var electionInstance;
    
	it("Initializes with three candidates", function() {
		return Election.deployed().then(function(instance) {
			return instance.candidatesCount();
		}).then(function(count) {
			assert.equal(count,3); // Assertion is from Chai
//			assert.equal(count,4); // Assertion is from Chai

		});
	});

	it("It initializes the candidates with the correct values", function() {
		return Election.deployed().then(function(instance) {
			electionInstance=instance;
			return electionInstance.candidates(1);
		}).then(function(candidate) {
			assert.equal(candidate[0], 1, "contains the correct id");
			assert.equal(candidate[1], "Candidate 1", "contains the correct name");
			assert.equal(candidate[2], 0, "contains the correct votes count");
			return electionInstance.candidates(2);
		}).then(function(candidate) {
			assert.equal(candidate[0], 2, "contains the correct id");
			assert.equal(candidate[1], "Candidate 2", "contains the correct name");
			assert.equal(candidate[2], 0, "contains the correct votes count");
			return electionInstance.candidates(3);
		}).then(function(candidate) {
			assert.equal(candidate[0], 3, "contains the correct id");
			assert.equal(candidate[1], "Candidate 3", "contains the correct name");
			assert.equal(candidate[2], 0, "contains the correct votes count");
	});
});

// To run the tests :  $ truffle test

});