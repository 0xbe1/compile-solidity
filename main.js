var solc = require('solc');
var fs = require("fs");
var path = require('path')

var contractSources=fs.readFileSync(path.join(__dirname,"ex1.sol"), 'utf8')

var input = {
  language: 'Solidity',
  sources: {"ex1.sol": {content: contractSources}},
  settings: {outputSelection: {'*': {'*': ['abi', "devdoc", "userdoc"]}}}
}

// TODO: not hardcode version
// get exact version from https://binaries.soliditylang.org/bin/list.json
solc.loadRemoteVersion(
  "latest",
  // "v0.5.16+commit.9c3226ce",
  (err, solc) => { 
  var output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(JSON.stringify(output))
 });
