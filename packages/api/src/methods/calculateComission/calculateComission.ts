import { Params } from "./types";
import {api} from '../../axios'

export const apiCalculateCommission = async ({
  paymentSystem,
  currencyFrom,
  currencyTo,
  amountFrom,
  amountTo,
  isReverse,
}: Params): Promise<number> => {
  const data = new FormData();
  data.append("paymentSystem", paymentSystem.toString());
  data.append("currencyFrom", currencyFrom.toString());
  data.append("currencyTo", currencyTo.toString());
  if (isReverse) {
    if (!amountTo) return new Promise((resolve) => resolve(0));
    data.append("amountTo", amountTo.toString());
    data.append("direction", "reverse");
  } else {
    if (!amountFrom) return new Promise((resolve) => resolve(0));
    data.append("amountFrom", amountFrom.toString());
  }

  const { data: responseData } = await api.post(
    "/front/calculator-commission-new",
    data
  );

  return responseData.data.calculatedAmount;
};
