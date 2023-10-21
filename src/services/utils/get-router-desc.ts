import { Chain } from "../../interfaces/chain.interface";

export function getRouterDesc(chain: Chain) {
    if (chain == Chain.BSC) return "Pancake V1 Router"
    if (chain == Chain.ETH) return "Uniswap V1 Router"
    if (chain == Chain.TRON) return "Sunswap Bridge"

    return ""
}