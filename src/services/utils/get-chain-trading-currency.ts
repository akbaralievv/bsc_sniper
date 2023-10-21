import { ChainTradingCurrency } from "../../interfaces/chain-trading-currency";
import { Chain } from "../../interfaces/chain.interface";

export function getChainTradingCurrency(chain: Chain) {
    if (chain == Chain.BSC) return ChainTradingCurrency.BSC
    if (chain == Chain.ETH) return ChainTradingCurrency.ETH
    if (chain == Chain.TRON) return ChainTradingCurrency.TRON

    return undefined
}