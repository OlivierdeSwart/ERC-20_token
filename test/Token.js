const { expect } = require('chai');
// const { ethers } = require('hardhat'); // = import ethers library from hardhat library

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
	let token

	beforeEach(async () => {
		//get ABI stuff
		const Token = await ethers.getContractFactory('Token')
		//deploy SC
		token = await Token.deploy('Cutiebaby Token','QTBB', '1000000')
	})

	describe('deployment', () => {
		const name = 'Cutiebaby Token'
		const symbols = 'QTBB'
		const decimals = '18'
		const totalSupply = tokens('1000000')

		// Tests go inside here
		it('has correct name', async () => {
			// Read token name
			// Check that name is correct
			expect(await token.name()).to.equal(name)
		})

		it('has correct symbol', async () => {
			// Read token name
			// Check that name is correct
			expect(await token.symbol()).to.equal(symbols)
		})

		it('has correct decimals', async () => {
			expect(await token.decimals()).to.equal(decimals)
		})

		it('has correct totalSupply', async () => {
			expect(await token.totalSupply()).to.equal(totalSupply)
		})
	})
})