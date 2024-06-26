export interface Minting {
  blocksPerYear: number;
  goalBonded: number;
  inflationMax: number;
  inflationMin: number;
  inflationRateChange: number;
  mintDenom: string;
}

export interface Distribution {
  baseProposerReward: number;
  bonusProposerReward: number;
  communityTax: number;
  withdrawAddressEnabled: boolean;
}

export interface CCVConsumer {
  enabled: boolean;
  unbondingPeriod: number;
  ccvTimeoutPeriod: number;
  historicalEntries: number;
  softOptOutThreshold: string;
  transferTimeoutPeriod: number;
  consumerRedistributionFraction: string;
  blocksPerDistributionTransmission: number;
}

export interface ParamsState {
  loading: boolean;
  exists: boolean;
  ccvConsumer: CCVConsumer | null;
  minting: Minting | null;
  distribution: Distribution | null;
}
