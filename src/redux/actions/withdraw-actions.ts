import { ActionType } from "../action-types/action-types";

export function setWithdrawAmount(amount: string) {

    return {
        type: ActionType.SET_WITHDRAW_AMOUNT,
        payload: amount
    }
}
