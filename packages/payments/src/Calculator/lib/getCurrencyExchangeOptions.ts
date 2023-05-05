import { IOption } from "@matbea/api";

export const getCurrencyExchangeOptions = (currency: IOption, allOptions: Array<IOption>)=>{
    const outFilterOptions = allOptions.filter(
        (o) => currency.exchanges.includes(o.currency.id) && o.type !== currency.type
    );

    return outFilterOptions
}