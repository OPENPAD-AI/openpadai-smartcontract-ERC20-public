require('@nomiclabs/hardhat-ethers');
require('@nomicfoundation/hardhat-verify');
require('@openzeppelin/hardhat-upgrades');
require("hardhat-gas-reporter");
require("dotenv").config();

const deployerPrivateKey = process.env.MAINNET_DEPLOYER_PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    gasReporter: {
      enabled: true,
    },
  },
  networks: {
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      chainId: 42161,
      accounts: [deployerPrivateKey],
    }
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  etherscan: {
    enabled: true,
    apiKey: {
      arbitrumSepolia: process.env.ARBITRUM_API_KEY,
      arbitrumOne: process.env.ARBITRUM_API_KEY
    },
  },
  sourcify: {
    enabled: false,
  }
};