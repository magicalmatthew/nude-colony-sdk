import * as BN from 'bn.js'
import { Contract, SendOptions } from 'web3-eth-contract'
import { EventLog, PromiEvent } from 'web3-core'

export interface ContractEvent<T> extends EventLog {
  returnValues: T
}

export interface SubscribeEvent<T> {
  on(
    type: 'data',
    handler: (receipt: ContractEvent<T>) => void
  );
}

export enum ProposalStatus {
  WAITING = '0',
  VOTING = '1',
  FAIL = '2',
  PASS = '3'
}

export interface Proposal {
  yes: string,
  no: string,
  topic: string,
  content: string,
  status: ProposalStatus,
  startTime: string
  endTime: string
}

export enum BlockchainNetworkId {
  mainnet = 1,
  ropsten = 3,
  rinkeby = 4,
  goerli = 5,
  dev = 2018,
  classic = 61,
  mordor = 63,
  kotti = 6,
}

export type BlockchainNetworkName =
  'mainnet' |
  'ropsten' |
  'rinkeby' |
  'goerli' |
  'dev' |
  'classic' |
  'mordor' |
  'kotti';
