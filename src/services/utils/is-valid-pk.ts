import { isHexString } from "ethers";

export function isValidPk(pk: string) {
    if (pk.length === 64) pk = `0x${pk}`

    let isValid: boolean


    try {
        isValid = isHexString(pk);
    } catch (e) {
        return false
    }
    

    return isValid
}