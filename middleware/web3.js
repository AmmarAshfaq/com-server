var Web3 = require('web3');

const HDWalletProvider = require('truffle-hdwallet-provider');
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // const provider = new Web3.providers.HttpProvider(
    //     'https://rinkeby.infura.io/4GmvurAJpAXENhCclUpY'

    // )
    // const provider = new HDWalletProvider(
    //     'lady slight floor fringe public opinion good work smart excess bachelor quantum',
    //     'https://rinkeby.infura.io/4GmvurAJpAXENhCclUpY'
    // );

    // web3 = new Web3(provider);
    web3 = new Web3(new Web3.providers.HttpProvider("http://111.235.250.31:80"))
}
// console.log(web3,"ammar")
//   web3.
module.exports = web3;