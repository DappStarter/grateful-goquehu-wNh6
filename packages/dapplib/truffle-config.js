require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain unknown imitate private foam tunnel'; 
let testAccounts = [
"0x9b766e0d1c98e872ea75d02f52f0f13d9649c09cb4bf11b9f0ad29621b593d89",
"0x262fc50d794198520b94310b24923ce9288287e40be2cb11d3f8347f8ff6c79a",
"0xc7e0cf99241bd38b94094b8c8a9142d263a52b60b703392c9c4a8ffc9355cc26",
"0x352508b622a0315082f7f9ea80c6b92145fa3e666f582c7a7e0e89ebddb940b0",
"0x8804336da0699651d55fc085bb0862ea07c26de616bef8b664dded5954c3b633",
"0x5b21ef0313a7f3ce48a4618df6cd1b5e817d51eb41001d4e986ad99242261c61",
"0xb5b192f61394e7454029b0d210b122da749f4664662c10f82277adb3ba0a2840",
"0x64ccf57c56330c524af68d53a13267d6d2e2838f22f277ace9093710f42130ce",
"0xe42dd0af5aa0c45b62130cd032a824244a57bb7b9341e2617a7f45694dce1744",
"0x2f190e2d706d77e461458c6adc2e3490c8b7e80166d8151449ca54088499b7cb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

