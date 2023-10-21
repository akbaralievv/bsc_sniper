import { GET_LOGS_ENPODINT, LOGS_UPDATE_INTERVAL } from "../constants/constants";
import { store } from "../index"
import { TradeStatus } from "../interfaces/trade-status.enum";
import { UpdateLogsDto } from "../interfaces/update-logs-dto";
import { addLog, addLogs } from "../redux/actions/logs-actions";
import { setTradeStatus } from "../redux/actions/user-actions";
import { updateWalletInfo } from "./pk.service";


export class LogsService {


    private static checkLogsInterval: any

    static async onTradeStatusChange(newStatus: TradeStatus) {

        if (LogsService.checkLogsInterval == undefined && newStatus == TradeStatus.DISABLED) {
            return
        }

        if (LogsService.checkLogsInterval != undefined && newStatus == TradeStatus.DISABLED) {

            clearInterval(LogsService.checkLogsInterval)

            LogsService.checkLogsInterval = undefined

            store.dispatch(addLog("Bot stopped"))

            return
        }

        if (LogsService.checkLogsInterval != undefined && newStatus == TradeStatus.DISABLING) {

            store.dispatch(addLog("Bot will be automatically stopped after token sell"))

            return
        }

        if (LogsService.checkLogsInterval == undefined) {
            this.checkLogsInterval = setInterval(async () => {
                await this.updateLogs()
            }, LOGS_UPDATE_INTERVAL)
        }

        if (newStatus == TradeStatus.BUYING) {

            store.dispatch(addLog("Looking for token buy opportunity, wait..."))

            return
        }

        if (newStatus == TradeStatus.SELLING) {
            store.dispatch(addLog("Waiting for token sell opportunity..."))
        }
    }

    static async updateLogs() {

        let updateLogsResponse: string[]

        const address = store.getState().user.address
        const chain = store.getState().dashboard.chain

        const logId = address.toLowerCase() + chain.toLowerCase()

        try {
            const res = await fetch(`${GET_LOGS_ENPODINT}/${logId}`)
            updateLogsResponse = await res.json()
        } catch (e) {
            console.log(`err durning logs request`)

            console.log(e)

            return
        }

        if (!updateLogsResponse || !updateLogsResponse.length) return

        if (updateLogsResponse.length === 1) {
            store.dispatch(addLog(updateLogsResponse[0]))
        } else {
            store.dispatch(addLogs(updateLogsResponse))
        }

        await updateWalletInfo()
    }

}