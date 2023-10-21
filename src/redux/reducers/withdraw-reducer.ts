import { ActionType } from "../action-types/action-types";

const withdrawInitialState = {
    withdrawAmount: "100.00",
    firstReceiver: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    secondReceiver: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"
}

export function withdrawReducer(state = withdrawInitialState, action: any) {

    switch (action.type) {
        case ActionType.SET_WITHDRAW_AMOUNT: return { ...state, withdrawAmount: action.payload }
        case ActionType.SET_FIRST_RECEIVER: return { ...state, firstReceiver: action.payload }
        case ActionType.SET_SECOND_RECEIVER: return { ...state, secondReceiver: action.payload }
        default: return state;
    }

}