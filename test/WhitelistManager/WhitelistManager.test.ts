import { expect } from "chai";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
describe("Whitelist Manager", function () {
  async function runEveryTime() {
    const [owner, hr, poolmanager, fundmanager, verifier, whitelister,user1,user2,user3,user4] =
      await ethers.getSigners();

    // WHITELISTER SETUP
    const whitelistManagerContract = await ethers.getContractFactory(
      "WhitelistManager"
    );
    const whitelistManager = await whitelistManagerContract.deploy();
    const whitelistManagerAddress = await whitelistManager.getAddress();

    // const whitelistManagerAddress = await whitelistManager.getAddress();
    // console.log("Whitelister deployed.", whitelistManagerAddress);

    return {
      whitelistManager,
      owner,
      hr,
      poolmanager,
      fundmanager,
      verifier,
      whitelister,
      user1,user2,user3,user4
    };
  }

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // ! DEPLOYMENT TESTS Whitelist Manager
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  describe("Whitelist Contract Deployment", async () => {
    it("[Deploy Testing]: Should deploy the Whitelist Address", async () => {
      const { whitelistManager } = await loadFixture(runEveryTime);
      expect(await whitelistManager.getAddress()).to.not.null;
    });

    it("[ADD HR]: Only Owner Should Add HR Address", async () => {
      const { whitelistManager, owner, hr, poolmanager } = await loadFixture(
        runEveryTime
      );
      await whitelistManager.connect(owner).addHr(hr.address);
      expect(await whitelistManager.isHr(hr.address)).to.equal(true);
    });

    it("[REMOVE HR]: Only Owner Should Remove HR Role", async () => {
      const { whitelistManager, owner, hr, poolmanager } = await loadFixture(
        runEveryTime
      );
      await whitelistManager.connect(owner).addHr(hr.address);
      await whitelistManager.connect(owner).removeHr(hr.address);
      expect(await whitelistManager.isHr(hr.address)).to.equal(false);
    });

    it("[ADD REMOVE HR]: other from owner should not add/remove HR address", async () => {
      const { whitelistManager, owner, hr, poolmanager } = await loadFixture(
        runEveryTime
      );
      await expect(
        whitelistManager.connect(poolmanager).addHr(hr.address)
      ).to.be.revertedWith("DOES_NOT_HAVE_OWNER_ROLE");

      await expect(
        whitelistManager.connect(poolmanager).removeHr(hr.address)
      ).to.be.revertedWith("DOES_NOT_HAVE_OWNER_ROLE");
    });

    it("[ADD REMOVE POOL MANAGER]: Only HR Should Add/Remove Pool Manager Address", async () => {
      const {
        whitelistManager,
        owner,
        hr,
        poolmanager,
        fundmanager,
        verifier,
        whitelister,
      } = await loadFixture(runEveryTime);
      await whitelistManager.connect(owner).addHr(hr.address);
      await whitelistManager.connect(hr).addPoolManager(poolmanager.address);
      expect(await whitelistManager.isPoolManager(poolmanager.address)).to.equal(true);
      await whitelistManager.connect(hr).removePoolManager(poolmanager.address);
      expect(await whitelistManager.isPoolManager(poolmanager.address)).to.equal(false);
    });

    it("[ADD REMOVE FUND MANAGER]: Only HR Should Add/Remove Fund Manager Address", async () => {
      const {
        whitelistManager,
        owner,
        hr,
        poolmanager,
        fundmanager,
        verifier,
        whitelister,
      } = await loadFixture(runEveryTime);
      await whitelistManager.connect(owner).addHr(hr.address);
      await whitelistManager.connect(hr).addFundManager(fundmanager.address);
      expect(await whitelistManager.isFundManager(fundmanager.address)).to.equal(true);
      await whitelistManager.connect(hr).removeFundManager(fundmanager.address);
      expect(await whitelistManager.isFundManager(fundmanager.address)).to.equal(false);
    });

    it("[ADD REMOVE VERIFIER]: Only HR Should Add/Remove Verifier Address", async () => {
      const {
        whitelistManager,
        owner,
        hr,
        poolmanager,
        fundmanager,
        verifier,
        whitelister,
      } = await loadFixture(runEveryTime);
      await whitelistManager.connect(owner).addHr(hr.address);
      await whitelistManager.connect(hr).addVerifier(verifier.address);
      expect(await whitelistManager.isVerifier(verifier.address)).to.equal(true);
      await whitelistManager.connect(hr).removeVerifier(verifier.address);
      expect(await whitelistManager.isVerifier(verifier.address)).to.equal(false);
    });

    it("[ADD REMOVE WHITELISTER]: Only Verifier/owner Should Add/Remove Whitelister Address", async () => {
      const {
        whitelistManager,
        owner,
        hr,
        poolmanager,
        fundmanager,
        verifier,
        whitelister,
      } = await loadFixture(runEveryTime);
      await whitelistManager.connect(owner).addHr(hr.address);
      await whitelistManager.connect(hr).addVerifier(verifier.address);
      await whitelistManager.connect(verifier).addWhitelist(whitelister.address);
      expect(await whitelistManager.isWhitelisted(whitelister.address)).to.equal(true);
      await whitelistManager.connect(verifier).removeWhitelist(whitelister.address);
      expect(await whitelistManager.isWhitelisted(whitelister.address)).to.equal(false);
    });
  });
  it("[ADD REMOVE OWNER]: Only Owners Should Add/Remove Owner Address", async () => {
    const {
      whitelistManager,
      owner,
      hr,
      poolmanager,
      fundmanager,
      verifier,
      whitelister,
      user1
    } = await loadFixture(runEveryTime);

    // Add new owner
    await whitelistManager.connect(owner).addOwner(user1.address);
    expect(await whitelistManager.isOwner(user1.address)).to.equal(true);
    expect(await whitelistManager.isHr(user1.address)).to.equal(true);
    expect(await whitelistManager.isFundManager(user1.address)).to.equal(true);
    expect(await whitelistManager.isPoolManager(user1.address)).to.equal(true);
    expect(await whitelistManager.isVerifier(user1.address)).to.equal(true);
    expect(await whitelistManager.isWhitelisted(user1.address)).to.equal(true);

    // Remove the owner
    await whitelistManager.connect(owner).removeOwner(user1.address);
    expect(await whitelistManager.isOwner(user1.address)).to.equal(false);
    expect(await whitelistManager.isHr(user1.address)).to.equal(false);
    expect(await whitelistManager.isFundManager(user1.address)).to.equal(false);
    expect(await whitelistManager.isPoolManager(user1.address)).to.equal(false);
    expect(await whitelistManager.isVerifier(user1.address)).to.equal(false);
    expect(await whitelistManager.isWhitelisted(user1.address)).to.equal(false);
  });
  it("[ADD/REMOVE MULTIPLE WHITELISTERS]: Only Verifier/Owner Should Add/Remove Whitelisted Addresses", async () => {
    const {
      whitelistManager,
      owner,
      hr,
      poolmanager,
      fundmanager,
      verifier,
      whitelister,user1,user2,user3,user4,
    } = await loadFixture(runEveryTime);
  
    
    const addressesToAdd = [user1.address, user2.address, user3.address, user4.address];
    const addressesToRemove = [user1.address, user2.address, user3.address, user4.address];
  

    await whitelistManager.connect(owner).addMultipleWhitelist(addressesToAdd);
  

    for (let i = 0; i < addressesToAdd.length; i++) {
      expect(await whitelistManager.isWhitelisted(addressesToAdd[i])).to.equal(true);
    }
    
    await whitelistManager.connect(owner).removeMultipleWhitelist(addressesToRemove);
 
    for (let i = 0; i < addressesToRemove.length; i++) {
      expect(await whitelistManager.isWhitelisted(addressesToRemove[i])).to.equal(false);
    }
  });
});
