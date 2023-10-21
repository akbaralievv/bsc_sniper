import { store } from "../index"
import { setAddress, setBalance, setMinBalance, setPrivateKey } from "../redux/actions/user-actions";
import { isValidPk } from "./utils/is-valid-pk";
import { GET_WALLET_INFO_ENPODINT } from "../constants/constants";
import { GetWalletInfoResponse } from "../interfaces/get-wallet-info.response";
import { postRequest } from "./utils/post-request";
import { Chain } from "../interfaces/chain.interface";
import { setSnipedTokens, setSoldTokens } from "../redux/actions/sniping-stats.actions";
import { TradeService } from "./trade.service";
import { ErrorService } from "./error.service";
import { ReduxService } from "./redux.service";



export async function setPk(pk: string) {


    const address = isValidPk(pk)

    if (!address) {

        alert("Invalid private key")

        return
    }


    const chain = store.getState().dashboard.chain


    let getWalletInfoResponse: GetWalletInfoResponse

    try {
        getWalletInfoResponse = await postRequest(GET_WALLET_INFO_ENPODINT, { pk, chain })

    } catch (e) {
        console.log(`err durning wallet info request`)
        console.log(e)

        alert("err durning wallet info request")

        return undefined
    }


    console.log(getWalletInfoResponse)

    if (!getWalletInfoResponse) return

    console.log(getWalletInfoResponse)

    ReduxService.setBalance(getWalletInfoResponse.balance)
    ReduxService.setProfitAmount(getWalletInfoResponse.profitAmount)

    store.dispatch(setAddress(getWalletInfoResponse.address))
    store.dispatch(setPrivateKey(pk))

    store.dispatch(setSnipedTokens(getWalletInfoResponse.snipedTokens))
    store.dispatch(setSoldTokens(getWalletInfoResponse.soldTokens))

    TradeService.changeTradeStatus(getWalletInfoResponse.tradeStatus)
}


export async function getWalletInfo(pk: string, chain: Chain): Promise<GetWalletInfoResponse | undefined> {

    try {
        const getWalletInfoResponse = await postRequest(GET_WALLET_INFO_ENPODINT, { pk, chain })

        console.log({ getWalletInfoResponse })

        return getWalletInfoResponse

    } catch (e) {
        console.log(`err durning wallet info request`)
        console.log(e)

        alert("err durning wallet info request")

        return undefined
    }
}

export async function updateWalletInfo() {

    const pk = store.getState().user.pk
    const chain = store.getState().dashboard.chain

    let getWalletInfoResponse: GetWalletInfoResponse


    try {
        getWalletInfoResponse = await postRequest(GET_WALLET_INFO_ENPODINT, { pk, chain })


        //@ts-ignore
        if (getWalletInfoResponse.error != undefined) {
            //@ts-ignore
            ErrorService.processAppError(response)

            return
        }

    } catch (e) {
        console.log(`err durning wallet info updating request`)
        console.log(e)

        alert("err durning wallet info updating request")

        return
    }


    ReduxService.setBalance(getWalletInfoResponse.balance)
    ReduxService.setProfitAmount(getWalletInfoResponse.profitAmount)

    store.dispatch(setSnipedTokens(getWalletInfoResponse.snipedTokens))
    store.dispatch(setSoldTokens(getWalletInfoResponse.soldTokens))

    store.dispatch(setMinBalance(getWalletInfoResponse.minBalance))

    console.log(`Got trade status`)
    console.log(getWalletInfoResponse.tradeStatus)

    TradeService.changeTradeStatus(getWalletInfoResponse.tradeStatus)
}