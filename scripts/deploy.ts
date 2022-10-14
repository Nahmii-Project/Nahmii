import { ethers } from "hardhat";

async function main() {


  const LPToken = await ethers.getContractFactory("LPToken");
  const lpToken = await LPToken.deploy();

  await lpToken.deployed();

  console.log(`lpToken  deployed to ${lpToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
