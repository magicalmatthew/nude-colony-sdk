import Web3 from 'web3'
import ContractFactory from './ContractFactory'
import { BlockchainNetworkId } from './types'


export default class NudeColony {
  readonly contracts: ContractFactory

  constructor(readonly web3: Web3, networkId: BlockchainNetworkId) {
    this.contracts = new ContractFactory(web3, networkId)

    // TODO: Api implementation
  }
}

export * from './types';
