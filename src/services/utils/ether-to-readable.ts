import { formatEther } from "ethers"
import { removeTrailingZeros } from "./remove-trailing-zeroes";


export function etherToReadable(amountWei: string, digits: number = 6): string {
    if (amountWei == "0") {
        return amountWei
    }

    let formatted = formatEther(amountWei);

    const fixed = (+formatted).toFixed(digits).toString()

    const formattedWithoutTrailing = removeTrailingZeros(fixed)

    return formattedWithoutTrailing
}