const { STARTING_BALANCE } = require("../config.js")

class Wallet {
    constructor() {
	this.balance = STARTING_BALANCE
    }
}

module.exports = Wallet
