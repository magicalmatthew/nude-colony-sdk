import { BlockchainNetworkId, ContractEvent, SubscribeEvent } from "../types";
import NudeColonyAbi from "./abi/NudeColony.json";
import Web3 from "web3";
import { PromiEvent } from "web3-core";
import * as BN from "bn.js";
import { BaseContract } from "./BaseContract";
import { EventBase } from "../EventBase";
import { Contract, EventOptions, PastEventOptions, SendOptions } from "web3-eth-contract";

interface IApproval {
  owner: string;
  approved: string;
  tokenId: BN
}

interface IApprovalForAll {
  owner: string;
  operator: string;
  approved: boolean
}

interface IReferenceSet {
  account: string;
  referredBy: string
}

interface ITransfer {
  from: string;
  to: string;
  tokenId: BN
}

export class NudeColony extends BaseContract {
  readonly events: NudeColonyEvents;
  abi = NudeColonyAbi as any;

  constructor(web3: Web3, network: BlockchainNetworkId) {
    super(web3, network);

    this.events = new NudeColonyEvents(this.getContract());
  }

  getName(): string {
    return "NudeColony";
  }

  approve(to: string, tokenId: BN, options?: SendOptions): PromiEvent<Contract> {
    return this.getContract().methods["approve"](to, tokenId).send(options);
  }

  async balanceOf(owner: string, options?: SendOptions): Promise<BN> {
    return this.getContract().methods["balanceOf"](owner).call();
  }

  async baseURI(options?: SendOptions): Promise<string> {
    return this.getContract().methods["baseURI"]().call();
  }

  async getApproved(tokenId: BN, options?: SendOptions): Promise<string> {
    return this.getContract().methods["getApproved"](tokenId).call();
  }

  async isApprovedForAll(owner: string, operator: string, options?: SendOptions): Promise<boolean> {
    return this.getContract().methods["isApprovedForAll"](owner, operator).call();
  }

  async name(options?: SendOptions): Promise<string> {
    return this.getContract().methods["name"]().call();
  }

  async ownerOf(tokenId: BN, options?: SendOptions): Promise<string> {
    return this.getContract().methods["ownerOf"](tokenId).call();
  }

  safeTransferFrom(from: string, to: string, tokenId: BN, options?: SendOptions): PromiEvent<Contract> {
    return this.getContract().methods["safeTransferFrom"](from, to, tokenId).send(options);
  }

  safeTransferFrom_1(from: string, to: string, tokenId: BN, Data: string, options?: SendOptions): PromiEvent<Contract> {
    return this.getContract().methods["safeTransferFrom_1"](from, to, tokenId, Data).send(options);
  }

  setApprovalForAll(operator: string, approved: boolean, options?: SendOptions): PromiEvent<Contract> {
    return this.getContract().methods["setApprovalForAll"](operator, approved).send(options);
  }

  async supportsInterface(interfaceId: any, options?: SendOptions): Promise<boolean> {
    return this.getContract().methods["supportsInterface"](interfaceId).call();
  }

  async symbol(options?: SendOptions): Promise<string> {
    return this.getContract().methods["symbol"]().call();
  }

  async tokenByIndex(index: BN, options?: SendOptions): Promise<BN> {
    return this.getContract().methods["tokenByIndex"](index).call();
  }

  async tokenOfOwnerByIndex(owner: string, index: BN, options?: SendOptions): Promise<BN> {
    return this.getContract().methods["tokenOfOwnerByIndex"](owner, index).call();
  }

  async tokenURI(tokenId: BN, options?: SendOptions): Promise<string> {
    return this.getContract().methods["tokenURI"](tokenId).call();
  }

  async totalSupply(options?: SendOptions): Promise<BN> {
    return this.getContract().methods["totalSupply"]().call();
  }

  transferFrom(from: string, to: string, tokenId: BN, options?: SendOptions): PromiEvent<Contract> {
    return this.getContract().methods["transferFrom"](from, to, tokenId).send(options);
  }

  mint(count: BN, options?: SendOptions): PromiEvent<Contract> {
    return this.getContract().methods["mint"](count).send(options);
  }

  mintWithReference(count: BN, Ref: string, options?: SendOptions): PromiEvent<Contract> {
    return this.getContract().methods["mintWithReference"](count, Ref).send(options);
  }

  async maxSupply(options?: SendOptions): Promise<BN> {
    return this.getContract().methods["maxSupply"]().call();
  }

  async nudePrice(options?: SendOptions): Promise<BN> {
    return this.getContract().methods["nudePrice"]().call();
  }

  async currentRound(options?: SendOptions): Promise<BN> {
    return this.getContract().methods["currentRound"]().call();
  }

  async round(roundId: BN, options?: SendOptions): Promise<{ price: BN, supply: BN }> {
    return this.getContract().methods["round"](roundId).call();
  }

  async provenance(options?: SendOptions): Promise<string> {
    return this.getContract().methods["provenance"]().call();
  }

  async referenceOf(account: string, options?: SendOptions): Promise<string> {
    return this.getContract().methods["referenceOf"](account).call();
  }

  async refDivisor(options?: SendOptions): Promise<BN> {
    return this.getContract().methods["refDivisor"]().call();
  }

}

export class NudeColonyEvents extends EventBase {

  async getPastApproval(options: PastEventOptions | {}): Promise<ContractEvent<IApproval>[]> {
    // @ts-ignore
    return this.contract.getPastEvents("Approval", options);
  }


  async getPastApprovalForAll(options: PastEventOptions | {}): Promise<ContractEvent<IApprovalForAll>[]> {
    // @ts-ignore
    return this.contract.getPastEvents("ApprovalForAll", options);
  }


  async getPastReferenceSet(options: PastEventOptions | {}): Promise<ContractEvent<IReferenceSet>[]> {
    // @ts-ignore
    return this.contract.getPastEvents("ReferenceSet", options);
  }


  async getPastTransfer(options: PastEventOptions | {}): Promise<ContractEvent<ITransfer>[]> {
    // @ts-ignore
    return this.contract.getPastEvents("Transfer", options);
  }

  Approval(options: EventOptions | {}): SubscribeEvent<IApproval> {
    return this.contract.events.Approval(options);
  }

  ApprovalForAll(options: EventOptions | {}): SubscribeEvent<IApprovalForAll> {
    return this.contract.events.ApprovalForAll(options);
  }

  ReferenceSet(options: EventOptions | {}): SubscribeEvent<IReferenceSet> {
    return this.contract.events.ReferenceSet(options);
  }

  Transfer(options: EventOptions | {}): SubscribeEvent<ITransfer> {
    return this.contract.events.Transfer(options);
  }
}
