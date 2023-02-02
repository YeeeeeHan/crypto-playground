import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-gas-reporter";

require("dotenv").config();

// https://hardhat.org/hardhat-runner/docs/advanced/create-task#creating-a-task

const {
  PRIVATE_KEY,
  POLYGONSCAN_API,
  QUICKNODE_MUMBAI_URL,
  ALCHEMY_MUMBAI_URL,
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  // defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url:
        ALCHEMY_MUMBAI_URL ||
        QUICKNODE_MUMBAI_URL ||
        "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API || "",
    },
  },
  paths: { tests: "tests" },
  // gasReporter: {
  // 	enabled: false,
  // },
};

export default config;
