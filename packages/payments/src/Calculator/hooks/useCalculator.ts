import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Timeout } from "react-number-format/types/types";
import {
  apiGetWizardData,
  IOption,
  IWizardData,
  apiCalculateCommission,
} from "@matbea/api";
import { getExchangeOptions } from "../lib";

type FormFields = {
  currencyFrom: IOption | null;
  currencyTo: IOption | null;
  amountFrom: string;
  amountTo: string;
};

const SORT_POSITIONS = [
  "BTC",
  "USDT.TRC20",
  "LTC",
  "ETH",
  "DOGE",
  "USDC",
  "TRX",
  "XMR",
  "DASH",
  "ZEC",
  "BNB",
];

const validateField = ({
  currency,
  amount,
  deposit,
}: {
  currency: IOption;
  amount: string;
  deposit?: boolean;
}) => {
  if (currency?.paymentSystem && amount.length > 0) {
    const key = deposit ? "SumDeposit" : "SumWithdraw";
    if ((currency.paymentSystem?.[`min${key}`] || 0) > +amount) {
      return `from ${currency.paymentSystem?.[`min${key}`]} ${
        currency.currency.shortName
      }`;
    }

    if ((currency.paymentSystem?.[`max${key}`] || 0) < +amount) {
      return `up to ${currency.paymentSystem?.[`max${key}`]} ${
        currency.currency.shortName
      }`;
    }
  }
  return null;
};

export const useCalculator = () => {
  const [wizardData, setWizzardData] = useState<IWizardData | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const form = useForm<FormFields>({
    defaultValues: {
      currencyTo: null,
      currencyFrom: null,
      amountTo: "",
      amountFrom: "",
    },
  });
  const [lastTouchedInput, setLastTouchedInput] = useState<
    "FROM" | "TO" | null
  >(null);
  const comissionTimeout = useRef<Timeout | null>(null);
  const [comissionLoading, setComissionLoading] = useState(false);
  const fields = form.watch();

  const getWizardData = async () => {
    try {
      const data = await apiGetWizardData();
      setWizzardData(data);
    } catch (e) {
      console.log("wizardDataFetchError", e);
    }
  };

  const rawOptions = useMemo(() => {
    if (wizardData) {
      const data = getExchangeOptions(wizardData, isFlipped);
      return {
        in: data.in.sort(
          (el1, el2) =>
            SORT_POSITIONS.indexOf(el1?.currency.shortName) -
            SORT_POSITIONS.indexOf(el2?.currency.shortName)
        ),
        out: data.out.sort(
          (el1, el2) =>
            SORT_POSITIONS.indexOf(el1?.currency.shortName) -
            SORT_POSITIONS.indexOf(el2?.currency.shortName)
        ),
      };
    }
    return {
      in: [],
      out: [],
    };
  }, [wizardData, isFlipped]);

  const outOptions = useMemo(() => {
    if (fields.currencyFrom) {
      return rawOptions.out.filter(
        (o) =>
          fields.currencyFrom!.exchanges.includes(o.currency.id) &&
          o.type !== fields.currencyFrom!.type
      );
    }
    return rawOptions.out;
  }, [rawOptions, fields.currencyFrom]);

  const calculateComission = async () => {
    if (comissionTimeout.current) {
      clearTimeout(comissionTimeout.current);
    }

    const isReverse = lastTouchedInput === "TO";

    if (
      lastTouchedInput == null ||
      !fields.currencyFrom?.currency ||
      !fields.currencyTo?.currency
    ) {
      return;
    }

    if (
      !fields.currencyFrom!.exchanges.includes(fields.currencyTo!.currency.id)
    ) {
      form.setValue("currencyTo", null);
      form.setValue("amountTo", "");
      form.setValue("amountFrom", "");
      return;
    }

    const paymentSystemId =
      fields.currencyFrom.type === "P"
        ? fields.currencyFrom?.paymentSystem?.id
        : fields.currencyTo?.paymentSystem?.id;

    if (!paymentSystemId) return;

    comissionTimeout.current = setTimeout(() => {
      (async () => {
        setComissionLoading(true);
        try {
          const amount = await apiCalculateCommission({
            amountFrom: +fields.amountFrom,
            amountTo: +fields.amountTo,
            currencyFrom: fields.currencyFrom!.currency.id,
            currencyTo: fields.currencyTo!.currency.id,
            paymentSystem: paymentSystemId,
            isReverse,
          });
          if (isReverse) {
            form.setValue("amountFrom", amount.toString());
          } else {
            form.setValue("amountTo", amount.toString());
          }
        } catch (e: any) {
          form.setValue("currencyTo", null);
          form.setValue("amountTo", "");
          form.setValue("amountFrom", "");
        }
        setComissionLoading(false);
      })();
    }, 800);
  };

  const flip = () => {
    const cFrom = fields.currencyFrom;
    const aFrom = fields.amountFrom;

    form.setValue("currencyFrom", fields.currencyTo);
    form.setValue("amountFrom", fields.amountTo);
    form.setValue("currencyTo", cFrom);
    form.setValue("amountTo", aFrom);

    setIsFlipped((state) => !state);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const queryCurTo = params.get("cur_to") || "";
    const queryCurFrom = params.get("cur_from") || "";
    const isFlipped =
      !!wizardData?.paymentsSystems.some(
        (o) => o.bestchangeTickers.deposit[0] === queryCurTo
      ) ||
      !!Object.values(wizardData?.currencies || {}).some(
        (o) =>
          o.shortName === queryCurFrom ||
          o.replaceShortNameForBestchange === queryCurFrom
      );
    setIsFlipped(isFlipped);
  }, [wizardData]);

  useEffect(() => {
    if (
      (rawOptions.in.length === 0 && rawOptions.out.length === 0) ||
      fields.currencyFrom ||
      fields.currencyTo
    ) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const queryCurTo = params.get("cur_to");
    const queryCurFrom = params.get("cur_from");
    const amount_from = params.get("amountFrom");
    const amount_to = params.get("amountTo");
    const isReverse = params.get("isReverse");

    if (queryCurTo) {
      const curTo = rawOptions.out.find(
        (o) =>
          o.currency.shortName === queryCurTo ||
          o.paymentSystem?.bestchangeTickers.deposit[0] === queryCurTo ||
          o.currency?.replaceShortNameForBestchange === queryCurTo
      );
      if (curTo) {
        form.setValue("currencyTo", curTo);
      }
    } else {
      form.setValue("currencyTo", rawOptions.out[0]);
    }

    if (queryCurFrom) {
      const curFrom = rawOptions.in.find(
        (o) =>
          o.currency.shortName === queryCurFrom ||
          o.paymentSystem?.bestchangeTickers.deposit[0] === queryCurFrom ||
          o.currency.replaceShortNameForBestchange === queryCurFrom
      );
      if (curFrom) {
        form.setValue("currencyFrom", curFrom);
      }
    } else {
      form.setValue("currencyFrom", rawOptions.in[0]);
    }

    if (amount_from && isReverse === "false") {
      form.setValue("amountFrom", amount_from);

      setLastTouchedInput("FROM");
    }

    if (amount_to && isReverse === "true") {
      form.setValue("amountTo", amount_to);

      setLastTouchedInput("TO");
    }
  }, [rawOptions]);

  useEffect(() => {
    getWizardData();
  }, []);

  useEffect(() => {
    calculateComission();
  }, [fields.currencyTo, fields.currencyFrom]);

  useEffect(() => {
    form.clearErrors("amountFrom");
    if (!fields.currencyFrom) {
      return;
    }
    const error = validateField({
      currency: fields.currencyFrom,
      amount: fields.amountFrom,
      deposit: true,
    });

    if (error) {
      form.setError("amountFrom", {
        message: error,
      });
    }
  }, [fields.amountFrom, fields.currencyFrom]);

  useEffect(() => {
    if (lastTouchedInput === "FROM") {
      calculateComission();
    }
  }, [fields.amountFrom]);

  useEffect(() => {
    form.clearErrors("amountTo");
    if (!fields.currencyTo) {
      return;
    }
    const error = validateField({
      currency: fields.currencyTo,
      amount: fields.amountTo,
      deposit: false,
    });

    if (error) {
      form.setError("amountTo", {
        message: error,
      });
    }
  }, [fields.amountTo, fields.currencyTo]);

  useEffect(() => {
    if (lastTouchedInput === "TO") {
      calculateComission();
    }
  }, [fields.amountTo]);

  return {
    form,
    wizardData,
    isFlipped,
    flip,
    outOptions,
    inOptions: rawOptions.in,
    fields,
    comissionLoading,
    lastTouchedInput,
    setLastTouchedInput,
  };
};
