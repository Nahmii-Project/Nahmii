import { ethers } from "hardhat";

async function main() {
  //DEPLOYING THE NAHMIBIA TOKEN
  const NahmiiToken = await ethers.getContractFactory("NahmibiaToken");
  const NToken = await NahmiiToken.deploy();

  await NToken.deployed();
  console.log(`NahmibiaToken contract is deployed to ${NToken.address}`);



  //DEPLOYING OLYMPUSPROSUBSIDY CONTRACT
  const OlympusProSubsidy = await ethers.getContractFactory("OPSubsidyRouter");
  const olympusProSubsidy = await OlympusProSubsidy.deploy();

  await olympusProSubsidy.deployed();
  console.log(`OlympusProSubsidy contract is deployed to ${olympusProSubsidy.address}`);



  //DEPLOYING OlympusProFactoryStorage Contract
  const OlympusProFactoryStorage = await ethers.getContractFactory(
    "OlympusProFactoryStorage"
  );
  const OPFS = await OlympusProFactoryStorage.deploy();

  await OPFS.deployed();
  console.log(`OlympusProFactoryStorage contract is deployed to ${OPFS.address}`);



  //DEPLOYING CustomTreasury Contract
  const initialOwnerAddr = "0x12896191de42EF8388f2892Ab76b9a728189260A";
  const CustomTreasury = await ethers.getContractFactory("CustomTreasury");
  const customTreasury = await CustomTreasury.deploy(NToken.address, initialOwnerAddr);

  await customTreasury.deployed();
  console.log(`CustomTreasury contract is deployed to ${customTreasury.address}`);



  //DEPLOYING THE MASTERCOPY CONTRACT
  //MasterCopy
  const MasterCopy = await ethers.getContractFactory("MasterCopy");
  const masterCopy = await MasterCopy.deploy();

  await masterCopy.deployed();
  console.log(
    `MasterCopy contract is deployed to ${masterCopy.address}`
  );


  //DEPLOYING THE OLYMPUS DAO CONTRACT
  const OlympusDAO = await ethers.getContractFactory("Proxy");
  const OlympusD = await OlympusDAO.deploy(masterCopy.address);

  await OlympusD.deployed();
  console.log(
    `OLYMPUS DAO contract is deployed to ${OlympusD.address}`
  );


  //DEPLOYING OLYMPUS PRO FACTORY
  const OlympusProFactory = await ethers.getContractFactory("OlympusProFactory");
  const OPFactory = await OlympusProFactory.deploy(
    customTreasury.address,
    OPFS.address,
    olympusProSubsidy.address,
    OlympusD.address
  );

  await OPFactory.deployed();
  console.log(`OlympusProFactory contract is deployed to ${OPFactory.address}`);




  /**************************After deployment of Factory*************************** */
  //DEPLOYING THE PRINCIPAL TOKEN CONTRACT
  // const LPToken = await ethers.getContractFactory("LPToken");
  // const LPT = await LPToken.deploy();

  // await LPT.deployed();
  // console.log(`LPToken contract is deployed to ${LPT.address}`);

    //DEPLOYING OLYMPUSPROCUSTOMBOND
  // const OlympusProCustomBond = await ethers.getContractFactory("CustomBond");
  // const customBond = await OlympusProCustomBond.deploy(
  //   customTreasury.address,
  //   LPT.address,
  //   customTreasury.address,
  //   initialOwnerAddr,
  //   OlympusD.address,
  //   //uint[] memory _tierCeilings,
  //   //uint[] memory _fees,
  //   // bool _feeInPayout
  // );

  // await customBond.deployed();
  // console.log(
  //   `OlympusProFactoryStorage contract is deployed to ${customBond.address}`
  // );
}

/************************Deployed Result***** */
// NahmibiaToken contract is deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3
// OlympusProSubsidy contract is deployed to 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// OlympusProFactoryStorage contract is deployed to 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
// CustomTreasury contract is deployed to 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
// MasterCopy contract is deployed to 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
// OLYMPUS DAO contract is deployed to 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
// OlympusProFactory contract is deployed to 0x0165878A594ca255338adfa4d48449f69242Eb8F

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
