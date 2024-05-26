const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const GreeterModule = buildModule("GreeterModule", (m) => {
  const greeter = m.contract("Greeter");

  return { greeter };
});

module.exports = GreeterModule;