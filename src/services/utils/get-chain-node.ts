import { BSC_NODE, ETH_NODE, TRON_NODE } from "../../constants/constants";
import { Chain } from "../../interfaces/chain.interface";

export function getChainNode(chain: Chain) {
    if (chain == Chain.BSC) return BSC_NODE
    if (chain == Chain.ETH) return ETH_NODE
    if (chain == Chain.TRON) return TRON_NODE

    return undefined
}