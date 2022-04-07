import "@nomiclabs/hardhat-ethers";
import { ethers } from 'hardhat';
import { expect } from 'chai';

describe("hello world", function() {
  it("should say Hello, world", async function () {
    const HW = await ethers.getContractFactory("HelloWorld");
    const hello = await HW.deploy();

    expect(await hello.hello()).to.equal("Hello, World");

    await hello.deployed();
  })
});