require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain hole just kiwi supply select'; 
let testAccounts = [
"0x2238fca91c823d41b7475fef04ac79bafd8757d8734e3ece86fd6cbb79a99f1d",
"0x5ea9c953d0c43c02b577d0c7cbfdfcd92b0a5d7328c1c7bacebd11b5fe7a6596",
"0x5f3744e9d588c10c4ee7dec2a3750889a1722cf2b30411261520ad493660578d",
"0x7ddee0c5823c2eec4901f235bce9246e6467b670e8872755fc1c7eef038992b2",
"0xe08df76a66a509149a9a8b7b366ed6d39e35e6f2b1c0aa4dadc9884aab552720",
"0xaf68ef54cbb6bffeade95eab78cff63300ebf225f1e6d781d1097bff7420bf0e",
"0x1965a6f271be3a11c7646f7f7d26c5c3fcf29dca708292a3f6e7079a9a4e3d8b",
"0x637f27bc257835232542d0e4ef29d59bcf913be1d62f7fe154be00d0c84c0afe",
"0xf8938c9d67e4745b975891ce8523d79d5df51d42b96ab4964eeb7f4bac4b929f",
"0x01fb71c1dfc379013dfe7f1fc1567fd7ab657c44fadca2ee52bcba481f467c10"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

