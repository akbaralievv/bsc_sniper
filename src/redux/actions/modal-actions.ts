import { Chain } from "../../interfaces/chain.interface";
import { ActionType } from "../action-types/action-types";

export function chooseChain(chain: Chain) {
    return function (dispatch: any) {
        dispatch(setChain(chain))
        dispatch(hideModal())
    }
}


export function setChain(chain: Chain) {
    return {
        type: ActionType.SET_CHAIN,
        payload: chain
    }
}

export function hideModal() {
    return {
        type: ActionType.SHOW_MODAL,
        payload: false
    }
}