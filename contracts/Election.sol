pragma solidity ^0.4.11;

contract Election {

	// Model A candidate
	struct Candidate {
		uint id;
		string name;
		uint voteCount;
	}
	// Store the candidate that we Model
		// mapping is like a Hash or Associative Array
	// key is the candiate ID, returns Candidate structure type
	// When we add a candidate to the mapping we write to the Blockchain
	// we change the state of the contract 
	mapping(uint => Candidate) public candidates;
	// Fetch the candidate from Storage

    // Store People (Addresses) that has voted for a candidate (uint)
    // If nothing in it, bool value defaults to false
    mapping(address => bool) public voters;

	// Store How many candidates (like a counter 'cache')
	// We increment it when we add a Candidate, 
	// we can use inside of a loop over all candidates
	uint public candidatesCount;

	constructor() public {
		// Add a Candidate when contract is migrated and deployed 
		addCandidate("Candidate 1");
		addCandidate("Candidate 2");
		addCandidate("Candidate 3");
	}

	function addCandidate(string _name) private {
		candidatesCount++; // Represent ID of the created candidate
		                              // Instantiate a Candidate
		candidates[candidatesCount] = Candidate(candidatesCount,_name,0);
	}

	// An external account should/can call this function
	function voting(uint _candidateId) public {

		// require evaluates to true or false, if false exits the function with false

		// require a valid candidate ( 1.. Total Candidates)
		require(_candidateId > 0 && _candidateId <= candidatesCount);

        // require that a voter hasn't voted before
		require(!voters[msg.sender]); 

		// record that a voter has voted
			voters[msg.sender]=true;
		// update candidate vote count
			candidates[_candidateId].voteCount++;

	}
}




