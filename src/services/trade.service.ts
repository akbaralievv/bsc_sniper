import { TradeStatus } from "../interfaces/trade-status.enum";
import { store } from "../index"
import { setTradeStatus } from "../redux/actions/user-actions";
import { LogsService } from "./logs.service";



export class TradeService {

    static async changeTradeStatus(newStatus: TradeStatus) {

        const currentStatus = store.getState().user.tradeStatus


        if (currentStatus != undefined) {
            if (currentStatus == newStatus) {
                return
            }
        }

        store.dispatch(setTradeStatus(newStatus))


        LogsService.onTradeStatusChange(newStatus)
    }

}