import chai from "chai";
const { expect } = chai;

describe("MyNFT Contract", function () {
    it("Should deploy and mint a new NFT", async function () {
        const [owner, addr1] = await ethers.getSigners();
        const MyNFT = await ethers.getContractFactory("MyNFT");
        const nft = await MyNFT.deploy();

        await nft.waitForDeployment();

        // Mint to owner
        await nft.mintTo(owner.address);
        expect(await nft.ownerOf(0)).to.equal(owner.address);

        // Transfer NFT
        await nft.transferNFT(owner.address, addr1.address, 0);
        expect(await nft.ownerOf(0)).to.equal(addr1.address);
    });
});
