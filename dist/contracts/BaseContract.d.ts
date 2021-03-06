import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import { BlockchainNetworkId } from '../types';
import { Contract } from 'web3-eth-contract';
export declare abstract class BaseContract {
    protected web3: Web3;
    readonly addresses: Record<string, string>;
    readonly abi: AbiItem[] | AbiItem;
    protected web3ContractInstance: any;
    constructor(web3: Web3, networkId: BlockchainNetworkId);
    getContract(): Contract;
    getContractAddress(): string;
    protected abstract getName(): string;
    getAddresses(): Record<string, string>;
    getWeb3ContractInstance(): Contract;
}
