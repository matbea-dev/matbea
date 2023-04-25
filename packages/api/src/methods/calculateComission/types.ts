
export type Params = {
    paymentSystem: number,
    currencyFrom: number,
    currencyTo: number,
    amountFrom: number,
    amountTo: number,
    isReverse: boolean
}

export type Result = {
    data: {
        calculatedAmount: number,
        currency: number,
        feeType: string
    }
}