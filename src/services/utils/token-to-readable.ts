import { formatUnits } from "ethers"
import { removeTrailingZeros } from "./remove-trailing-zeroes";

export function tokenToReadable(
    amountWei: string,
    decimals: number,
    digits: number,
    removeZeroes: boolean = true
) {
    if (amountWei == "0") {
        return amountWei
    }

    const tokenAmount = formatUnits(amountWei, decimals);

    const formatted = parseFloat(tokenAmount).toFixed(digits);

    if (removeZeroes) {
        const formattedWithoutTrailing = removeTrailingZeros(formatted)

        return formattedWithoutTrailing
    }

    return formatted
}