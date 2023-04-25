import { IWizardData, IPaymentSystem, ICurrency, IExchange, IDetailsField, IOption } from "../../types";
import axios from 'axios';

export const apiGetWizardData = async (): Promise<IWizardData> => {
    const {data: {data}} = await axios.get("https://lk.stage.matbea.xyz/api/front/get-wizard-data")
    const optionsDetailsFieldByFieldId = data.optionsDetailsFieldByFieldId;
    const paymentsSystems: IPaymentSystem[] = Object.values(
        data.paymentsSystems
    );
    const currencies: { [id: string]: ICurrency } = data.currencies;
    const exchanges: { [pair: string]: IExchange } = {};
    const fiatToCrypto: { [id: string]: number[] } = {};

    const detailsFields: { [id: string]: IDetailsField } = {};

    data.detailsFields.forEach((d: IDetailsField) => {
        detailsFields[d.id.toString()] = d;
    });

    data.exchangeRates.forEach((e: IExchange) => {
        exchanges[e.pair] = e;

        if (!fiatToCrypto[e.fromCurrencyId.toString()]) {
        fiatToCrypto[e.fromCurrencyId.toString()] = [];
        }
        if (currencies[e.toCurrencyId.toString()]) {
        fiatToCrypto[e.fromCurrencyId].push(e.toCurrencyId);
        }
        if (!fiatToCrypto[e.toCurrencyId.toString()]) {
        fiatToCrypto[e.toCurrencyId.toString()] = [];
        }
        if (currencies[e.fromCurrencyId.toString()]) {
        fiatToCrypto[e.toCurrencyId].push(e.fromCurrencyId);
        }
    });

    const inCurrencies: ICurrency[] = [];

    return {
        paymentsSystems,
        currencies,
        exchanges,
        fiatToCrypto,
        optionsDetailsFieldByFieldId,
        detailsFields,
    };
};
  