import { TradeStatus } from "../../interfaces/trade-status.enum";
import { ActionType } from "../action-types/action-types";

const userInitialState = {
    address: "",
    pk: "",
    balance: "0",
    balanceReadable: "0",
    tradeStatus: undefined,
    tradeAmount: "0.05",
    minBalance: "10000000000000000000000"
}

export function userReducer(state = userInitialState, action: any) {

    switch (action.type) {
        case ActionType.SET_PK: return { ...state, pk: action.payload }
        case ActionType.SET_ADDRESS: return { ...state, address: action.payload }
        case ActionType.SET_BALANCE: return { ...state, balance: action.payload }
        case ActionType.SET_BALANCE_READABLE: return { ...state, balanceReadable: action.payload }
        case ActionType.SET_TRADE_AMOUNT: return { ...state, tradeAmount: action.payload }
        case ActionType.SET_MIN_BALANCE: return { ...state, minBalance: action.payload }
        case ActionType.SET_TRADE_STATUS: return { ...state, tradeStatus: action.payload }
        default: return state;
    }

}