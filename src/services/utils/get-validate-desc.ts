import { Chain } from "../../interfaces/chain.interface";

export function getValidateDesc(chain: Chain) {
    if (chain == Chain.BSC) return "Validate Pancake V2"
    if (chain == Chain.ETH) return "Validate Uniswap V2"
    if (chain == Chain.TRON) return "Validate SunSwap"

    return ""
}