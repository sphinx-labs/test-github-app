import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@chugsplash/plugins'

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17", 
        settings: {
          outputSelection: {
            '*': {
              '*': ['storageLayout'],
            },
          },
        },
      },
    ]
  }
};

export default config;