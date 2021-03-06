"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainNetworkId = exports.ProposalStatus = void 0;
var ProposalStatus;
(function (ProposalStatus) {
    ProposalStatus["WAITING"] = "0";
    ProposalStatus["VOTING"] = "1";
    ProposalStatus["FAIL"] = "2";
    ProposalStatus["PASS"] = "3";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
var BlockchainNetworkId;
(function (BlockchainNetworkId) {
    BlockchainNetworkId[BlockchainNetworkId["mainnet"] = 1] = "mainnet";
    BlockchainNetworkId[BlockchainNetworkId["ropsten"] = 3] = "ropsten";
    BlockchainNetworkId[BlockchainNetworkId["rinkeby"] = 4] = "rinkeby";
    BlockchainNetworkId[BlockchainNetworkId["goerli"] = 5] = "goerli";
    BlockchainNetworkId[BlockchainNetworkId["dev"] = 2018] = "dev";
    BlockchainNetworkId[BlockchainNetworkId["classic"] = 61] = "classic";
    BlockchainNetworkId[BlockchainNetworkId["mordor"] = 63] = "mordor";
    BlockchainNetworkId[BlockchainNetworkId["kotti"] = 6] = "kotti";
})(BlockchainNetworkId = exports.BlockchainNetworkId || (exports.BlockchainNetworkId = {}));
//# sourceMappingURL=types.js.map