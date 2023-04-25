export interface ICurrency {
    id: number;
    type: number;
    linkToIcon: string;
    prec: number;
    name: string;
    shortName: string;
    shortDisplayName: string | null;
    sort: number;
    inputEnabled: boolean;
    outputEnabled: boolean;
    enabledValidationRulesAddressCrypts: string;
    displayName: string;
    replaceShortNameForBestchange: string | null;
  }

export interface IExchange {
    fromCurrencyId: number;
    id: number;
    pair: string;
    toCurrencyId: number;
  }  

export interface IPaymentSystem {
    id: number;
    currencyId: number;
    icon: string | null;
    iconMini: string | null;
    name: string;
    forOrderDepositP2P: boolean;
    forOrderWithdrawP2P: boolean;
    cardPhoneRequired: boolean;
    psDetailsFields: IPSDetailField[];
    maxSumWithdraw: number;
    maxSumDeposit: number;
    forMainOrder: number;
    bestchangeTickers: IBestchangeTickers;
}

export interface IBestchangeTickers {
    deposit: string[];
    withdraw: string[];
}  

export interface IPSDetailField {
    id: number;
    forDeposit: boolean;
    forWithdraw: boolean;
    requiredForUser: boolean;
}
   

export interface IWizardData {
    paymentsSystems: IPaymentSystem[];
    currencies: { [id: string]: ICurrency };
    exchanges: { [pair: string]: IExchange };
    fiatToCrypto: { [id: string]: number[] };
    optionsDetailsFieldByFieldId: { [id: string]: IOptionDetailsField[] };
    detailsFields: { [id: string]: IDetailsField };
}

export interface IOption {
    value: string;
    label: any;
    currency: ICurrency;
    paymentSystemId?: number;
    paymentSystem?: IPaymentSystem;
    exchanges: number[];
    type: "P" | "C" /* "P" - paymentSystem | "C" - Crypto currency */;
}  

export interface IOptionDetailsField {
    data: { [locale: string]: string };
    detailsFieldId: number;
    optionId: number;
}

export interface IDetailsField {
    fieldValueType: string;
    id: number;
    name: string;
    weight: number;
}