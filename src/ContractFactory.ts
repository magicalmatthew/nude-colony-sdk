import Web3 from 'web3'
import { BlockchainNetworkId } from './types'
import { NudeColony } from "./contracts/NudeColony"


export default class ContractFactory {
  readonly NudeColony: NudeColony


  constructor(web3: Web3, chainId: BlockchainNetworkId) {
    this.NudeColony = new NudeColony(web3, chainId)

  }
}
