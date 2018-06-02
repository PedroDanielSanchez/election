// artifacts will pass the Contract to truffle 
// so that the contract is exposed and 
// we can interact with it in the browser, console, when we write tests
// or in the application
// > To run the migration at the command line:
// > $ truffle migration
var Election = artifacts.require("./Election.sol");
// truffle(development)> app.candidate
// { [Function]
//   call: [Function],
//   sendTransaction: [Function],
//   request: [Function: bound ],
//   estimateGas: [Function] }
// truffle(development)> app.candidate()
// 'Pedro'
// truffle(development)>


module.exports = function(deployer) {
  deployer.deploy(Election);
};

// To interact with the truffle console:

// $ truffle console

// Deploying it

// >> Election.deployed().then(function(instance) {app=instance})

// NOW type "app" then enter

//It displays all its properties

// >> truffle(development)> app.contract.address
// >> truffle(development)> app.address
// '0x70bfd138b89c9132aa84a91eec8e6a554321a3d7'
// truffle(development)>

// truffle(development)> app.candidate
// { [Function]
//   call: [Function],
//   sendTransaction: [Function],
//   request: [Function: bound ],
//   estimateGas: [Function] }
// truffle(development)> app.candidate()
// 'Pedro'
// truffle(development)>

// * * READS ON THE BLOCKCHAON ARE FREE
//   BUT WRITE COST GAS



