const { ethers } = require("hardhat");
const { vars } = require("hardhat/config");

const network = "sepolia";
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

async function main(){

    const provider = new ethers.AlchemyProvider(network,ALCHEMY_API_KEY);
    const wallet = new ethers.Wallet(SEPOLIA_PRIVATE_KEY,provider).address;
    const blockNumber = await provider.getBlockNumber();
    const LastBlockNumber = await provider.getBlock(blockNumber);
    //console.log("Last BlockNumber =",LastBlockNumber);
    const gasPrice =await provider.getFeeData();
    //console.log("Gas Price =",gasPrice);
    const weiValue = await provider.getBalance(wallet);
    const ethValue = ethers.formatEther(weiValue);
    console.log(wallet, ethValue, "ETH");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });