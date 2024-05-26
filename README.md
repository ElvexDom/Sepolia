# Installing Hardhat with Create React App
## `npm install -g create-react-app` or `npm i create-react-app@latest`
## `npx create-react-app react-hardhat-app`
## `cd react-hardhat-app`
## `npx hardhat init`

# Available Commands
## `npm start` to start the application
## `npx hardhat node` to run Hardhat Network
## `npx hardhat test` to run tests
## `npx hardhat compile` to compile contracts
## `npx hardhat ignition deploy ./ignition/modules/{your_contract}.js --network hardhat` to deploy a contract on Hardhat Network
## `npx hardhat run scripts/{your_script}.js --network hardhat` to run a script on Hardhat Network
## `npx hardhat {your_task} --network hardhat` to launch a task on Hardhat Network

# Create an Alchemy account 
## https://www.alchemy.com
## https://auth.alchemy.com/signup
## https://www.alchemy.com/faucets/ethereum-sepolia
## `npx hardhat vars set ALCHEMY_API_KEY`
## `npx hardhat vars set SEPOLIA_PRIVATE_KEY`
