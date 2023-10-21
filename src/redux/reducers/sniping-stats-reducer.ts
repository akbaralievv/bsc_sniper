import { ActionType } from "../action-types/action-types";

const snipingStats = {
    snipedTokens: 0,
    soldTokens: 0,
    profitAmount: "0"
}

export function snipingStatsReducer(state = snipingStats, action: any) {

    switch (action.type) {
        case ActionType.SET_SNIPED_TOKENS: return { ...state, snipedTokens: action.payload }
        case ActionType.SET_SOLD_TOKENS: return { ...state, soldTokens: action.payload }
        case ActionType.SET_PROFIT_AMOUNT: return { ...state, profitAmount: action.payload }
        default: return state;
    }

}