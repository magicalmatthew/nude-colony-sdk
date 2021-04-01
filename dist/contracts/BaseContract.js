"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseContract = void 0;
const types_1 = require("../types");
const mainnet_json_1 = __importDefault(require("./addresses/mainnet.json"));
const goerli_json_1 = __importDefault(require("./addresses/goerli.json"));
const addressesConfig = {
    [types_1.BlockchainNetworkId.mainnet]: mainnet_json_1.default,
    [types_1.BlockchainNetworkId.goerli]: goerli_json_1.default
};
class BaseContract {
    constructor(web3, networkId) {
        this.web3 = web3;
        const addresses = addressesConfig[networkId];
        if (!addresses) {
            throw new Error('Contract addresses are not defined');
        }
        this.addresses = addresses;
    }
    getContract() {
        if (this.web3ContractInstance) {
            return this.web3ContractInstance;
        }
        const address = this.getContractAddress();
        this.web3ContractInstance = new this.web3.eth.Contract(this.abi, address);
        return this.web3ContractInstance;
    }
    getContractAddress() {
        const contractName = this.getName();
        return this.addresses[contractName];
    }
    getAddresses() {
        return this.addresses;
    }
    getWeb3ContractInstance() {
        return this.web3ContractInstance;
    }
}
exports.BaseContract = BaseContract;
//# sourceMappingURL=BaseContract.js.map