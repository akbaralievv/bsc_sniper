import { ChainCurrency } from "../../interfaces/chain-currency";
import { Chain } from "../../interfaces/chain.interface";

export function getChainCurrency(chain: Chain) {
    if (chain == Chain.BSC) return ChainCurrency.BSC
    if (chain == Chain.ETH) return ChainCurrency.ETH
    if (chain == Chain.TRON) return ChainCurrency.TRON

    return undefined
}