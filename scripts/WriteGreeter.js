const { ethers } = require("hardhat");
const { vars } = require("hardhat/config");

const network = "sepolia";
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

const Token = require('../artifacts/contracts/Greeter.sol/Greeter.json');
const contractAddress = '0x36733aca7e00b0e83c41a4b3ec9d1f96883f3531';

async function main(){
    const provider = new ethers.AlchemyProvider(network,ALCHEMY_API_KEY);
    const wallet = new ethers.Wallet(SEPOLIA_PRIVATE_KEY,provider).address;
    console.log(wallet)
    const signer = await ethers.provider.getSigner(wallet);
    const contract = new ethers.Contract(contractAddress, Token.abi, signer);
    const transaction = await contract.setGreeting("Ceci est un test");
    console.log(transaction);

    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });