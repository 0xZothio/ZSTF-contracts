
 const getProviderRpcUrl = (network) => {
  let rpcUrl;

  switch (network) {
    case "localhost":
      rpcUrl = process.env.LOCALHOST_RPC_URL;
      break;
    case "mumbai":
      rpcUrl = process.env.MUMBAI_RPC_URL;
      break;
    case "alfajores":
      rpcUrl = process.env.ALFAJORES_RPC_URL;
      break;
    case "matic":
      rpcUrl = process.env.MATIC_RPC_URL;
      break;
    case "plume_testnet":
      rpcUrl = process.env.PLUME_TESTNET_RPC_URL;
      break;
    case "berachainArtio":
      rpcUrl = process.env.BERACHAIN_ARTIO_RPC_URL;
      break;
    case "metisSepolia":
      rpcUrl = process.env.METIS_SEPOLIA_RPC_URL;
      break;
    case "metis":
      rpcUrl = process.env.METIS_RPC_URL;
      break;
    case "celo":
      rpcUrl = process.env.CELO_RPC_URL;
      break;
    case "bobaMainnet":
      rpcUrl = process.env.BOBA_MAINNET_RPC_URL;
      break;
    case "bobaGoerliTestnet":
      rpcUrl = process.env.BOBA_GOERLI_TESTNET_RPC_URL;
      break;
    case "bobaSeploiaTestnet":
      rpcUrl = process.env.BOBA_SEPOLIA_TESTNET_RPC_URL;
      break;
    case "core_testnet_chain":
      rpcUrl = process.env.CORE_TESTNET_CHAIN_RPC_URL;
      break;
    default:
      throw new Error("Unknown network: " + network);
  }

  if (!rpcUrl) {
    throw new Error(
      `rpcUrl empty for network ${network} - check your configuration`
    );
  }

  return rpcUrl;
};

 const getPrivateKey = () => {
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey)
    throw new Error(
      "private key not provided - check your environment variables"
    );
  return privateKey;
};




module.exports = {
  getProviderRpcUrl,
  getPrivateKey,
};