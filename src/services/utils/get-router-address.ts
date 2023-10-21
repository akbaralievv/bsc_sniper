import { Chain } from "../../interfaces/chain.interface";

export function getRouterAddress(chain: Chain) {
    if (chain == Chain.BSC) return "0x10ED43C718714eb63d5aA57B78B54704E256024E"
    if (chain == Chain.ETH) return "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    if (chain == Chain.TRON) return "TP8MmLAQLz5ivzFqhcJ34AiMxN8qTPJ7tT"

    return ""
}