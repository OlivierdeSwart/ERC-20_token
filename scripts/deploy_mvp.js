async function main() {
  // Fetch contract to deploy
  const token = await ethers.getContractFactory("Token")

  // Deploy contract
  Token.deploy()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
