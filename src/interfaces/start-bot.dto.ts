import { Chain } from "./chain.interface"

export interface StartBotDto {

    pk: string
    chain: Chain
    tradeAmount: string
}