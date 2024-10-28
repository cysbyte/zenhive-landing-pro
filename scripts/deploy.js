import hre from "hardhat";

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const MyNFT = await ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.deploy();
    console.log('nft', nft)

    await nft.waitForDeployment();
    console.log("Contract deployed to:", await nft.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
