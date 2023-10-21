import { ethers } from "ethers"

import { START_BOT_ENPODINT, STOP_BOT_ENDPOINT } from "../constants/constants"
import { store } from "../index"
import { TradeStatus } from "../interfaces/trade-status.enum"
import { postRequest } from "./utils/post-request"
import { updateWalletInfo } from "./pk.service"
import { ErrorService } from "./error.service"
import { BotErrors } from "../interfaces/bot-errors.enum"


export class BotService {


    static async startBot() {
        const pk = store.getState().user.pk

        if (pk == "") {
            alert("Enter private key first")

            return
        }

        const tradeStatus = store.getState().user.tradeStatus

        console.log(`Trade status`)
        console.log(tradeStatus)

        if (tradeStatus != TradeStatus.DISABLED) {
            alert("Bot already started")

            return
        }

        const tradeAmount = store.getState().user.tradeAmount

        let tradeAmountBN: bigint

        try {
            tradeAmountBN = ethers.parseEther(tradeAmount)
        } catch (e) {


            alert("Invalid trade amount")

            return
        }

        // const balance = store.getState().user.balance
        // const balanceBigint = ethers.parseEther(balance)


        // if (balanceBigint < tradeAmountBN) {
        //     alert(`Trade amount must be less than wallet balance`)

        //     return
        // }

        const chain = store.getState().dashboard.chain


        try {
            const response = await postRequest(START_BOT_ENPODINT, { pk, chain, tradeAmount })

            if (response.error != undefined) {
                ErrorService.processAppError(response)

                return
            }
        } catch (e) {
            console.log(`err durning start bot request`)
            console.log(e)

            alert(e)

            return
        }

        await updateWalletInfo()
    }

    static async stopBot() {

        const pk = store.getState().user.pk

        if (pk == "") {
            alert("Enter private key first")

            return
        }

        const tradeStatus = store.getState().user.tradeStatus

        if (tradeStatus == TradeStatus.DISABLED) {
            alert("Bot not started")

            return
        }

        const chain = store.getState().dashboard.chain

        try {
            const response = await postRequest(STOP_BOT_ENDPOINT, { pk, chain })

            if (response.error != undefined) {
                ErrorService.processAppError(response)
            }

        } catch (e) {
            console.log(`err durning stop bot request`)
            console.log(e)

            alert(e)

            return
        }

        await updateWalletInfo()
    }
}