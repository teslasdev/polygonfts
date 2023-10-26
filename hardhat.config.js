const fs = require('fs');

require('@nomiclabs/hardhat-waffle');



module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai : {
      url: `https://polygon-mainnet.infura.io/v3/15f76cbb947142378e75c643630e32b4`,
      accounts: ["6e562fb727d0cfdd88ee2e449a6d9ccfce32f336296d009243535641757cfd12"],
    },
  },
  solidity: '0.8.4',
};
