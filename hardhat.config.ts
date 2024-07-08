import { task,HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "solidity-docgen";
require("dotenv").config();
import { getProviderRpcUrl, getPrivateKey } from "./supportedNetworks";
import customChains from "./supportedNetworks/customChains";
task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);
    console.log(ethers.utils.formatEther(balance), "ETH");
  });

task(
  "hello",
  "Prints 'Hello, World!'",
  async function (taskArguments, hre, runSuper) {
    console.log("Hello, World!");
  }
);

task("compileAll", "Compiles all contracts")
  .setAction(async () => {
    await hre.run('compile');
    console.log("All contracts have been compiled.");
  });

const {
  POLYGON_API_KEY,
  PLUME_TESTNET_API,
  ALFAJORES_API_KEY,
  CORE_CHAIN_API_KEY,
} = process.env;
const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: getProviderRpcUrl("localhost"),
    },
    hardhat: {},
    mumbai: {
      url: getProviderRpcUrl("mumbai"),
      accounts: [getPrivateKey()],
    },
    alfajores: {
      url: getProviderRpcUrl("alfajores"),
      accounts: [getPrivateKey()],
      chainId: 44787,
    },
    matic: {
      url: getProviderRpcUrl("matic"),
      accounts: [getPrivateKey()],
    },
    plume_testnet: {
      url: getProviderRpcUrl("plume_testnet"),
      accounts: [getPrivateKey()],
    },
    berachainArtio: {
      url: getProviderRpcUrl("berachainArtio"),
      accounts: [getPrivateKey()],
      gasPrice: 10000000000,
    },
    metisSepolia: {
      url: getProviderRpcUrl("metisSepolia"),
      accounts: [getPrivateKey()],
    },
    metis: {
      url: getProviderRpcUrl("metis"),
      accounts: [getPrivateKey()],
    },
    celo: {
      url: getProviderRpcUrl("celo"),
      accounts: [getPrivateKey()],
    },
    bobaMainnet: {
      url: getProviderRpcUrl("bobaMainnet"),
      accounts: [getPrivateKey()],
    },
    bobaGoerliTestnet: {
      url: getProviderRpcUrl("bobaGoerliTestnet"),
      accounts: [getPrivateKey()],
    },
    bobaSeploiaTestnet: {
      url: getProviderRpcUrl("bobaSeploiaTestnet"),
      accounts: [getPrivateKey()],
    },
    core_testnet_chain: {
      url: getProviderRpcUrl("core_testnet_chain"),
      accounts: [getPrivateKey()],
    },
  },
  etherscan: {
    apiKey: {
      plume_testnet: PLUME_TESTNET_API,
      polygonMumbai: POLYGON_API_KEY,
      polygon: POLYGON_API_KEY,
      berachainArtio: "berachainArtio",
      alfajores: ALFAJORES_API_KEY,
      celo: ALFAJORES_API_KEY,
      metis: "apiKey is not required, just set a placeholder",
      metisSepolia: "apiKey is not required, just set a placeholder",
      bobaSeploiaTestnet: "NO_KEY_REQUIRED",
      core_testnet_chain: CORE_CHAIN_API_KEY,
    },
    customChains: customChains,
  },
  gasReporter: { enabled: true },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.16",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "berlin",
    },
    overrides: {
      "contracts/V3/ZothPool.sol": {
        version: "0.8.16",
      },
      "contracts/V1/ZothTestLP.sol": {
        version: "0.8.16",
      },
    },
  },
  docgen: {
    output: "docs",
    pages: () => "api.md",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
