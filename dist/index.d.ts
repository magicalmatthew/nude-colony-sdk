import Web3 from 'web3';
import ContractFactory from './ContractFactory';
import { BlockchainNetworkId } from './types';
export default class NudeColony {
    readonly web3: Web3;
    readonly contracts: ContractFactory;
    constructor(web3: Web3, networkId: BlockchainNetworkId);
}
export * from './types';
