/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import {  Polygon } from "@thirdweb-dev/chains";
export const NETWORK = Polygon;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x646df0eA6e54EDEebD53f1C757006379f172DA0F";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xDC6989841E62bAd4536570b7f0fb75Eb60467a7e";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use polygonscan to view transactions on the Polygon net.
export const ETHERSCAN_URL = "https://polygonscan.com";
