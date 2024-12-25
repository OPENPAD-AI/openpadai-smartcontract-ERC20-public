const { ethers, upgrades } = require('hardhat');

const main = async () => {
    // Get network data from Hardhat config (see hardhat.config.js).
    const networkName = network.name;
    // Check if the network is supported.
    console.log(`Deploying to ${networkName} network...`);

    const ERC20 = (
        await ethers.getContractFactory('OPADToken')
    );
    const erc20 = await ERC20.deploy();
    await erc20.deployed();
    console.log('ERC20 address:', erc20.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
