const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const HelloWorldModule = buildModule("HelloWorldModule", (m) => {
  const helloWorld = m.contract("HelloWorld");

  return { helloWorld };
});

module.exports = HelloWorldModule;