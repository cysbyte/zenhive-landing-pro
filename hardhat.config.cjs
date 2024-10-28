require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
        url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: 'https://sepolia-rpc.scroll.io',
      accounts: [`${process.env.PRIVATE_KEY}`],
    }
},
};
