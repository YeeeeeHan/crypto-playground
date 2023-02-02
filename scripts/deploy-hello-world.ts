const { ethers } = require("hardhat");

import verify from "./verify-contract";

async function deployHelloWorld() {
  const HellowWorld = await ethers.getContractFactory("HelloWorld");

  const hw = await HellowWorld.deploy("Hello World!");

  console.log(`Contract deployed to ${hw.address}`);

  if (
    ethers.provider.network.chainId == 137 ||
    ethers.provider.network.chainId == 80001
  ) {
    await verify(hw.address, []);
  }
}

deployHelloWorld()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
