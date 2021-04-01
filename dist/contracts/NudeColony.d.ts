import { BlockchainNetworkId, ContractEvent, SubscribeEvent } from "../types";
import Web3 from "web3";
import { PromiEvent } from "web3-core";
import * as BN from "bn.js";
import { BaseContract } from "./BaseContract";
import { EventBase } from "../EventBase";
import { Contract, EventOptions, PastEventOptions, SendOptions } from "web3-eth-contract";
interface IApproval {
    owner: string;
    approved: string;
    tokenId: BN;
}
interface IApprovalForAll {
    owner: string;
    operator: string;
    approved: boolean;
}
interface IReferenceSet {
    account: string;
    referredBy: string;
}
interface ITransfer {
    from: string;
    to: string;
    tokenId: BN;
}
export declare class NudeColony extends BaseContract {
    readonly events: NudeColonyEvents;
    abi: any;
    constructor(web3: Web3, network: BlockchainNetworkId);
    getName(): string;
    approve(to: string, tokenId: BN, options?: SendOptions): PromiEvent<Contract>;
    balanceOf(owner: string, options?: SendOptions): Promise<BN>;
    baseURI(options?: SendOptions): Promise<string>;
    getApproved(tokenId: BN, options?: SendOptions): Promise<string>;
    isApprovedForAll(owner: string, operator: string, options?: SendOptions): Promise<boolean>;
    name(options?: SendOptions): Promise<string>;
    ownerOf(tokenId: BN, options?: SendOptions): Promise<string>;
    safeTransferFrom(from: string, to: string, tokenId: BN, options?: SendOptions): PromiEvent<Contract>;
    safeTransferFrom_1(from: string, to: string, tokenId: BN, Data: string, options?: SendOptions): PromiEvent<Contract>;
    setApprovalForAll(operator: string, approved: boolean, options?: SendOptions): PromiEvent<Contract>;
    supportsInterface(interfaceId: any, options?: SendOptions): Promise<boolean>;
    symbol(options?: SendOptions): Promise<string>;
    tokenByIndex(index: BN, options?: SendOptions): Promise<BN>;
    tokenOfOwnerByIndex(owner: string, index: BN, options?: SendOptions): Promise<BN>;
    tokenURI(tokenId: BN, options?: SendOptions): Promise<string>;
    totalSupply(options?: SendOptions): Promise<BN>;
    transferFrom(from: string, to: string, tokenId: BN, options?: SendOptions): PromiEvent<Contract>;
    mint(count: BN, options?: SendOptions): PromiEvent<Contract>;
    mintWithReference(count: BN, Ref: string, options?: SendOptions): PromiEvent<Contract>;
    maxSupply(options?: SendOptions): Promise<BN>;
    nudePrice(options?: SendOptions): Promise<BN>;
    currentRound(options?: SendOptions): Promise<BN>;
    round(roundId: BN, options?: SendOptions): Promise<{
        price: BN;
        supply: BN;
    }>;
    provenance(options?: SendOptions): Promise<string>;
    referenceOf(account: string, options?: SendOptions): Promise<string>;
    refDivisor(options?: SendOptions): Promise<BN>;
}
export declare class NudeColonyEvents extends EventBase {
    getPastApproval(options: PastEventOptions | {}): Promise<ContractEvent<IApproval>[]>;
    getPastApprovalForAll(options: PastEventOptions | {}): Promise<ContractEvent<IApprovalForAll>[]>;
    getPastReferenceSet(options: PastEventOptions | {}): Promise<ContractEvent<IReferenceSet>[]>;
    getPastTransfer(options: PastEventOptions | {}): Promise<ContractEvent<ITransfer>[]>;
    Approval(options: EventOptions | {}): SubscribeEvent<IApproval>;
    ApprovalForAll(options: EventOptions | {}): SubscribeEvent<IApprovalForAll>;
    ReferenceSet(options: EventOptions | {}): SubscribeEvent<IReferenceSet>;
    Transfer(options: EventOptions | {}): SubscribeEvent<ITransfer>;
}
export {};
