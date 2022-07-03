var solc = require('solc');
var fs = require("fs");
var path = require('path')

var contract= fs.readFileSync(path.join(__dirname,"hello.txt"), 'utf8')
// console.log(contract)

var input = {
  language: 'Solidity',
  sources: {'test.sol': {content: contract}},
  settings: {outputSelection: {'*': {'*': ['*']}}}
}

var output = JSON.parse(solc.compile(JSON.stringify(input)));

for (var contractName in output.contracts['test.sol']) {
    console.log(JSON.stringify(output.contracts['test.sol'][contractName]))
}
