var solc = require('solc');

var contract=`
    //SPDX-License-Identifier:MIT
    pragma solidity ^0.8.0;
    contract hello{
       string public hii='hello world';
       /// @dev message this is a dev
       /// @param message this is a param
       function update(string memory message) public{hii=message;}
    }`

var input = {
  language: 'Solidity',
  sources: {'test.sol': {content: contract}},
  settings: {outputSelection: {'*': {'*': ['*']}}}
}

var output = JSON.parse(solc.compile(JSON.stringify(input)));

for (var contractName in output.contracts['test.sol']) {
    console.log(JSON.stringify(output.contracts['test.sol'][contractName]))
}
