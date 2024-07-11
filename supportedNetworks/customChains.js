const customChains =  [
    {
      network: "plume_testnet",
      chainId: 161221135,
      urls: {
        apiURL: "https://plume-testnet.explorer.caldera.xyz/api",
        browserURL: "https://plume-testnet.explorer.caldera.xyz",
      },
    },
    {
      network: "metis",
      chainId: 1088,
      urls: {
        apiURL:
          "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
        browserURL: "https://andromeda-explorer.metis.io",
      },
    },
    {
      network: "metisSepolia",
      chainId: 59902,
      urls: {
        apiURL:
          "https://api.routescan.io/v2/network/testnet/evm/59902/etherscan",
        browserURL: "https://sepolia.explorer.metisdevops.link/",
      },
    },
    {
      network: "berachainArtio",
      chainId: 80085,
      urls: {
        apiURL:
          "https://api.routescan.io/v2/network/testnet/evm/80085/etherscan",
        browserURL: "https://artio.beratrail.io",
      },
    },
    {
      network: "alfajores",
      chainId: 44787,
      urls: {
        apiURL: "https://api-alfajores.celoscan.io/api",
        browserURL: "https://alfajores.celoscan.io",
      },
    },
    {
      network: "celo",
      chainId: 42220,
      urls: {
        apiURL: "https://api.celoscan.io/api",
        browserURL: "https://celoscan.io/",
      },
    },
    {
      network: "core_testnet_chain",
      chainId: 1115,
      urls: {
        apiURL: "",
        browserURL: "https://scan.test.btcs.network",
      },
    },
    {
      network: "polygonAmoy",
      chainId: 80002,
      urls: {
        apiURL: "",
        browserURL: "https://amoy.polygonscan.com/",
      },
    }
  ];

  module.exports = customChains;