"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NudeColony_1 = require("./contracts/NudeColony");
class ContractFactory {
    constructor(web3, chainId) {
        this.NudeColony = new NudeColony_1.NudeColony(web3, chainId);
    }
}
exports.default = ContractFactory;
//# sourceMappingURL=ContractFactory.js.map