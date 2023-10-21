import { TradeStatus } from "../../interfaces/trade-status.enum";
import { ActionType } from "../action-types/action-types";

export function setBalance(amount: string) {

    return {
        type: ActionType.SET_BALANCE,
        payload: amount
    }
}

export function setBalanceReadable(amount: string) {

    return {
        type: ActionType.SET_BALANCE_READABLE,
        payload: amount
    }
}

export function setAddress(address: string) {
    return {
        type: ActionType.SET_ADDRESS,
        payload: address
    }
}

export function setPrivateKey(pk: string) {
    return {
        type: ActionType.SET_PK,
        payload: pk
    }
}

export function setTradeStatus(status: TradeStatus) {
    return {
        type: ActionType.SET_TRADE_STATUS,
        payload: status
    }
}

export function setTradeAmount(amount: string) {
    return {
        type: ActionType.SET_TRADE_AMOUNT,
        payload: amount
    }
}

export function setMinBalance(minBalance: string) {
    return {
        type: ActionType.SET_MIN_BALANCE,
        payload: minBalance
    }
}