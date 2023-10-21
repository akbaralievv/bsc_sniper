import { ChainFullName } from "../../interfaces/chain-full-name";
import { Chain } from "../../interfaces/chain.interface";

export function getChainFullName(chain: Chain) {
    if (chain == Chain.BSC) return ChainFullName.BSC
    if (chain == Chain.ETH) return ChainFullName.ETH
    if (chain == Chain.TRON) return ChainFullName.TRON

    return undefined
}