const fs = require('fs');

require('@nomiclabs/hardhat-waffle');



module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai : {
      url: `https://polygon-mainnet.infura.io/v3/15f76cbb947142378e75c643630e32b4`,
      accounts: ["5476de687a3a1205ebf8c262dab750ef5fd8bae9a9504a90b5563f1db72c4b5e"],
    },
  },
  solidity: '0.8.4',
};
