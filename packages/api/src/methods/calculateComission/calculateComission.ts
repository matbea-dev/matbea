import axios, { AxiosPromise } from "axios";
import { Params, Result } from "./types";

export const apiCalculatorCommission = (
{
    paymentSystem,
    currencyFrom,
    currencyTo,
    amountFrom,
    amountTo,
    isReverse
}: Params
): AxiosPromise<Result> => {  
    const data = new FormData();
    data.append("paymentSystem", paymentSystem.toString());
    data.append("currencyFrom", currencyFrom.toString());
    data.append("currencyTo", currencyTo.toString());
    if (isReverse) {
        data.append("amountTo", amountTo.toString());
        data.append("direction", "reverse");
    } else {
        data.append("amountFrom", amountFrom.toString());
    }
    return axios
      .post("https://lk.stage.matbea.xyz/api/front/calculator-commission-new", data)
};
  