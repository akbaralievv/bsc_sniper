import { formatEther } from "ethers";
import { ActionType } from "../action-types/action-types";



export function setSnipedTokens(amount: number) {
    return {
        type: ActionType.SET_SNIPED_TOKENS,
        payload: amount
    }
}

export function setSoldTokens(amount: number) {
    return {
        type: ActionType.SET_SOLD_TOKENS,
        payload: amount
    }
}

export function setProfitAmount(amount: string) {
    return {
        type: ActionType.SET_PROFIT_AMOUNT,
        payload: amount
    }
}