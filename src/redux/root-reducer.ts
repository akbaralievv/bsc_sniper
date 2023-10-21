import { combineReducers } from "redux";
import { dashboardReducer } from "./reducers/dashboard-reducer"
import { logsReducer } from "./reducers/logs-reducer";
import { snipingStatsReducer } from "./reducers/sniping-stats-reducer";
import { userReducer } from "./reducers/user-reducer";
import { withdrawReducer } from "./reducers/withdraw-reducer";

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    logs: logsReducer,
    snipingStats: snipingStatsReducer,
    user: userReducer,
    withdraw: withdrawReducer
});