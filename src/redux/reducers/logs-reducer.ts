import { ActionType } from "../action-types/action-types";

const initialLogsState = {
    logs: []
}

export function logsReducer(state = initialLogsState, action: any) {

    switch (action.type) {
        case ActionType.ADD_LOG: return { ...state, logs: [...state.logs, action.payload] }
        case ActionType.ADD_LOGS: return { ...state, logs: [...state.logs, ...action.payload] }
        default: return state;
    }

}