import { ChainCurrency } from "../../interfaces/chain-currency";
import { Chain } from "../../interfaces/chain.interface";
import { ActionType } from "../action-types/action-types";

const initialDashboardState = {
    showModal: true,
    chain: Chain.BSC,
    chainCurrency: ChainCurrency.BSC
}

export function dashboardReducer(state = initialDashboardState, action: any) {

    switch (action.type) {
        case ActionType.SET_CHAIN: return { ...state, chain: action.payload }
        case ActionType.SHOW_MODAL: return { ...state, showModal: action.payload }
        default: return state;
    }

}