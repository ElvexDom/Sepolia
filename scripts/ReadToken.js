const { ethers } = require("hardhat");
const { vars } = require("hardhat/config");

const network = "sepolia";
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

const Token = require('../artifacts/contracts/Token.sol/Token.json');
const contractAddress = '0xf052da578f23324db12d40eb9e31dc3423c5cec1';

async function main(){
    const provider = new ethers.AlchemyProvider(network,ALCHEMY_API_KEY);
    const wallet = new ethers.Wallet(SEPOLIA_PRIVATE_KEY,provider).address;
    console.log(wallet)
    const contract = new ethers.Contract(contractAddress, Token.abi, provider);
    const transaction = await contract.balanceOf(contractAddress);
    console.log(transaction);

    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });