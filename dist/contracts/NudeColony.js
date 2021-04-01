"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NudeColonyEvents = exports.NudeColony = void 0;
const NudeColony_json_1 = __importDefault(require("./abi/NudeColony.json"));
const BaseContract_1 = require("./BaseContract");
const EventBase_1 = require("../EventBase");
class NudeColony extends BaseContract_1.BaseContract {
    constructor(web3, network) {
        super(web3, network);
        this.abi = NudeColony_json_1.default;
        this.events = new NudeColonyEvents(this.getContract());
    }
    getName() {
        return "NudeColony";
    }
    approve(to, tokenId, options) {
        return this.getContract().methods["approve"](to, tokenId).send(options);
    }
    async balanceOf(owner, options) {
        return this.getContract().methods["balanceOf"](owner).call();
    }
    async baseURI(options) {
        return this.getContract().methods["baseURI"]().call();
    }
    async getApproved(tokenId, options) {
        return this.getContract().methods["getApproved"](tokenId).call();
    }
    async isApprovedForAll(owner, operator, options) {
        return this.getContract().methods["isApprovedForAll"](owner, operator).call();
    }
    async name(options) {
        return this.getContract().methods["name"]().call();
    }
    async ownerOf(tokenId, options) {
        return this.getContract().methods["ownerOf"](tokenId).call();
    }
    safeTransferFrom(from, to, tokenId, options) {
        return this.getContract().methods["safeTransferFrom"](from, to, tokenId).send(options);
    }
    safeTransferFrom_1(from, to, tokenId, Data, options) {
        return this.getContract().methods["safeTransferFrom_1"](from, to, tokenId, Data).send(options);
    }
    setApprovalForAll(operator, approved, options) {
        return this.getContract().methods["setApprovalForAll"](operator, approved).send(options);
    }
    async supportsInterface(interfaceId, options) {
        return this.getContract().methods["supportsInterface"](interfaceId).call();
    }
    async symbol(options) {
        return this.getContract().methods["symbol"]().call();
    }
    async tokenByIndex(index, options) {
        return this.getContract().methods["tokenByIndex"](index).call();
    }
    async tokenOfOwnerByIndex(owner, index, options) {
        return this.getContract().methods["tokenOfOwnerByIndex"](owner, index).call();
    }
    async tokenURI(tokenId, options) {
        return this.getContract().methods["tokenURI"](tokenId).call();
    }
    async totalSupply(options) {
        return this.getContract().methods["totalSupply"]().call();
    }
    transferFrom(from, to, tokenId, options) {
        return this.getContract().methods["transferFrom"](from, to, tokenId).send(options);
    }
    mint(count, options) {
        return this.getContract().methods["mint"](count).send(options);
    }
    mintWithReference(count, Ref, options) {
        return this.getContract().methods["mintWithReference"](count, Ref).send(options);
    }
    async maxSupply(options) {
        return this.getContract().methods["maxSupply"]().call();
    }
    async nudePrice(options) {
        return this.getContract().methods["nudePrice"]().call();
    }
    async currentRound(options) {
        return this.getContract().methods["currentRound"]().call();
    }
    async round(roundId, options) {
        return this.getContract().methods["round"](roundId).call();
    }
    async provenance(options) {
        return this.getContract().methods["provenance"]().call();
    }
    async referenceOf(account, options) {
        return this.getContract().methods["referenceOf"](account).call();
    }
    async refDivisor(options) {
        return this.getContract().methods["refDivisor"]().call();
    }
}
exports.NudeColony = NudeColony;
class NudeColonyEvents extends EventBase_1.EventBase {
    async getPastApproval(options) {
        return this.contract.getPastEvents("Approval", options);
    }
    async getPastApprovalForAll(options) {
        return this.contract.getPastEvents("ApprovalForAll", options);
    }
    async getPastReferenceSet(options) {
        return this.contract.getPastEvents("ReferenceSet", options);
    }
    async getPastTransfer(options) {
        return this.contract.getPastEvents("Transfer", options);
    }
    Approval(options) {
        return this.contract.events.Approval(options);
    }
    ApprovalForAll(options) {
        return this.contract.events.ApprovalForAll(options);
    }
    ReferenceSet(options) {
        return this.contract.events.ReferenceSet(options);
    }
    Transfer(options) {
        return this.contract.events.Transfer(options);
    }
}
exports.NudeColonyEvents = NudeColonyEvents;
//# sourceMappingURL=NudeColony.js.map