import { TradeStatus } from "./trade-status.enum"

export interface GetWalletInfoResponse {
    address: string
    balance: string
    snipedTokens: number
    soldTokens: number
    profitAmount: string
    tradeStatus: TradeStatus
    minBalance: string
}