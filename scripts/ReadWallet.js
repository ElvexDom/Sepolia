const { ethers } = require("hardhat");
const { vars } = require("hardhat/config");

const network = "sepolia";
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

const Token = require('../artifacts/contracts/Wallet.sol/Wallet.json');
const contractAddress = '0xb8f277701db6dcc06bbc8c8a524729402bd08fe5';

async function main(){
    const provider = new ethers.AlchemyProvider(network,ALCHEMY_API_KEY);
    const wallet = new ethers.Wallet(SEPOLIA_PRIVATE_KEY,provider).address;
    console.log(wallet)
    const contract = new ethers.Contract(contractAddress, Token.abi, provider);
    const transaction = await contract.getBalance();
    console.log(transaction);

    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });