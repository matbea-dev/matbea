import { IOption, IWizardData } from "@matbea/api";
import React from "react";

type Options = {
  in: Array<IOption>;
  out: Array<IOption>;
};

export const getExchangeOptions = (
  data: IWizardData,
  isFlipped: boolean
): Options => {
  const sortedPaymentSystems = data.paymentsSystems.sort(
    (a, b) => a.forMainOrder - b.forMainOrder
  );

  const currencies = Object.values(data.currencies);

  const inOptions = [];
  const outOptions = [];

  for (let i = 0; i < sortedPaymentSystems.length; i++) {
    const ps = sortedPaymentSystems[i];
    const currency = data.currencies[ps.currencyId];

    if (!currency) {
      continue;
    }

    const option: IOption = {
      type: "P",
      value: `P:${ps.id}`,
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {ps.iconMini && <img width={24} height={23} src={ps.iconMini} />}
          <p>{`${ps.name} [${currency.shortName}]`}</p>
        </div>
      ),
      currency,
      exchanges: data.fiatToCrypto[ps.currencyId] ?? [],
      paymentSystem: ps,
    };

    if (!isFlipped && ps.forOrderDepositP2P) {
      inOptions.push(option);
    }

    if (isFlipped && ps.forOrderWithdrawP2P) {
      outOptions.push(option);
    }
  }

  for (let i = 0; i < currencies.length; i++) {
    const c = currencies[i];
    if (c.type !== 0) {
      continue;
    }

    const exchanges = data.fiatToCrypto[c.id];

    if (!exchanges || exchanges.length === 0) {
      continue;
    }

    const option: IOption = {
      type: "C",
      value: `C:${c.id}`,
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {c.linkToIcon && <img width={24} height={23} src={c.linkToIcon} />}
          <p>{c.name}</p>
        </div>
      ),
      currency: c,
      exchanges,
    };
    if (!isFlipped && c.outputEnabled) {
      outOptions.push(option);
    }

    if (isFlipped && c.inputEnabled) {
      inOptions.push(option);
    }
  }

  return {
    in: inOptions,
    out: outOptions,
  };
};

