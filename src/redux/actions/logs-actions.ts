import { ActionType } from "../action-types/action-types";

export function addLog(log: string) {
    return {
        type: ActionType.ADD_LOG,
        payload: log
    }
}

export function addLogs(logs: string[]) {
    return {
        type: ActionType.ADD_LOGS,
        payload: logs
    }
}