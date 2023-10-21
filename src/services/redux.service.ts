import { store } from "../index"
import { Chain } from "../interfaces/chain.interface"
import { setProfitAmount } from "../redux/actions/sniping-stats.actions"
import { setBalance, setBalanceReadable } from "../redux/actions/user-actions"
import { etherToReadable } from "./utils/ether-to-readable"
import { tokenToReadable } from "./utils/token-to-readable"


export class ReduxService {



    static setBalance(amountWei: string) {
        const chain = store.getState().dashboard.chain

        console.log(`Balance wei`, amountWei)

        let balanceFormatted: string

        if (chain == Chain.TRON) {
            balanceFormatted = tokenToReadable(amountWei, 6, 2)
        } else {
            balanceFormatted = etherToReadable(amountWei)
        }

        store.dispatch(setBalance(amountWei))
        store.dispatch(setBalanceReadable(balanceFormatted))
    }

    static setProfitAmount(amountWei: string) {
        const chain = store.getState().dashboard.chain

        let balanceFormatted: string

        if (chain == Chain.TRON) {
            balanceFormatted = tokenToReadable(amountWei, 6, 2)
        } else {
            balanceFormatted = etherToReadable(amountWei)
        }

        store.dispatch(setProfitAmount(balanceFormatted))
    }
}