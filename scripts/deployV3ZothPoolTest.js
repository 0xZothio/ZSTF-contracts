const hre = require("hardhat");
const whiteListeManagerPlume = "0xc23bcA1E5F1a9b9e155B472ED5bA3EA77DB939c8";
const whiteListeManagerBerachain = "0x371907DA46F9771189C068864115a4e84a227469";
const whiteListeManagerMumbai = "0xCe60F35440d758714402118D03Fd79F30941f5A2";
const deployedBerachainPool = "0x8Fc89849cdd463c9d75a9973C9683064FAa887e4";
const whitelistManagerMetis = "0x394b899AAb17EfCF200AA3F9ce12F6fDf740E6Aa";
const whiteListManagerCoreTestnetChain =
  "0xBFff78BB02925E4D8671D0d90B2a6330fcAedd87";
const whitelistManagerPolygonAmoy =
  "0x6D4E4b9cEb5A92F5212c017187528bCd0c516965";
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getSecondsOfDays(day) {
  return day * 24 * 60 * 60;
}
async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const poolName = "AlloyxPool";
  const poolSymbol = "AP";
  const baseUri = "https://resources.zoth.io/nft/667e6fb92ce462b576799f37";
  const ZothPool = await hre.ethers.deployContract("ZothPool", [
    whitelistManagerPolygonAmoy,
    0,
    poolName,
    poolSymbol,
    baseUri,
    10,
    ["0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582"],
    30,
    3600,
  ]);

  await ZothPool.waitForDeployment();

  console.log(
    "ZothPool Deployed Successfully on Mentioned Network",
    ZothPool.target
  );

  console.log("Waiting for 30 Seconds to Verify the Contract on Etherscan");
  await sleep(30 * 1000);

  // // Verify the RektLock Contract
  await hre.run("verify:verify", {
    address: ZothPool.target,
    constructorArguments: [
      whitelistManagerPolygonAmoy,
      0,
      poolName,
      poolSymbol,
      baseUri,
      10,
      ["0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582"],
      30,
      3600,
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
