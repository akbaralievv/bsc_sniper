import { Chain } from "../../interfaces/chain.interface";

export function getRouterName(chain: Chain): string {
    if (chain == Chain.BSC) return "PANCAKESWAP"
    if (chain == Chain.ETH) return "UNISWAP"
    if (chain == Chain.TRON) return "SUNSWAP"

    return ""
}