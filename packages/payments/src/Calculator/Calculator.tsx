import React from "react";
import { ICalculator } from "./types";
import cn from "classnames";
import { Controller } from "react-hook-form";
import IconSwap from "./icon--swap.svg";
import { Box, TextButton, Input, Divider, Button, BlockAlignText, SelectSearch, CurrencyRate, Space, Logo, BodyL } from "@matbea/core";
import { useCalculator } from "./hooks";
import './style.scss'
import classNames from "classnames";

const boxStyles: Record<string, any> = {
  standalone: {
    className: "swap",
    borderRadius: 5,
    bgColor: "tertiary",
    shadow: "tertiary",
    paddingBottom: "level2",
    paddingTop: "level2",
  },
  injected: {},
};

export const Calculator: React.FC<ICalculator> = ({
  style,
  className,
  referal = {}
}) => {

  const {
    fields,
    comissionLoading,
    form,
    inOptions,
    outOptions,
    setLastTouchedInput,
    isFlipped,
    lastTouchedInput,
    flip
  } = useCalculator()

  const handleCalculatorSubmit = () => {
    const query = new URLSearchParams();
    let cur_to;
    let cur_from;

    if (fields.currencyFrom?.type === "P") {
      cur_from =
        fields.currencyFrom?.paymentSystem?.bestchangeTickers
          .deposit[0];
    } else {
      cur_from = fields.currencyFrom?.currency.shortName;
    }

    if (fields.currencyTo?.type === "P") {
      cur_to =
        fields?.currencyTo.paymentSystem?.bestchangeTickers
          .deposit[0];
    } else {
      cur_to = fields.currencyTo?.currency.shortName;
    }

    const amount_from = +fields.amountFrom;
    if (amount_from && amount_from > 0) {
      query.set("amountFrom", amount_from.toString());
    }

    const amount_to = +fields.amountTo;
    if (amount_to && amount_to > 0) {
      query.set("amountTo", amount_to.toString());
    }

    query.set("isReverse", (lastTouchedInput === "TO").toString());

    if (cur_to) {
      query.set("cur_to", cur_to);
    }
    if (cur_from) {
      query.set("cur_from", cur_from);
    }
    if (referal.fromPartner){
      query.set("fromPartner", referal.fromPartner)
    }
    if (referal.utmSource){
      query.set("utm_source", referal.utmSource)
    }


    window.open('https://matbea.com/swap?' + query)
  };

  return (
    <Box {...boxStyles.standalone} style={style} className={classNames('swap',className)}>
      <Space flex direction="column" rowGap="level2">
          <BlockAlignText align="center">
            <Logo size="lg"/>
            <BodyL weight="bold">SWAP</BodyL>
            <p>Быстрый обмен криптовалют без регистрации и верификации</p>
          </BlockAlignText>
        <div className="swap__body">
          <Space
            flex
            justify="center"
            breakpoints={{ md: { justify: "flex-end" } }}
            className="swap__top"
          >
            {fields.amountFrom && fields.amountTo && !comissionLoading && (
              <CurrencyRate
                valueCrypto="1"
                cryptoName={fields.currencyFrom?.currency.shortName || ""}
                valueFiat={(
                  parseFloat(fields.amountTo) / parseFloat(fields.amountFrom)
                ).toFixed(fields.currencyTo?.currency.prec || 8)}
                fiatName={fields.currencyTo?.currency.shortName || ""}
              />
            )}
          </Space>

          <Space flex direction="column" rowGap="level1">
            <Space
              className={cn("swap__group")}
              flex
              direction="column"
              rowGap="const-level3"
              breakpoints={{ md: { direction: "row" } }}
            >
              <Space
                flex
                className="swap__group-item"
                direction="column"
                rowGap="level1"
              >
                <Controller
                  control={form.control}
                  name="currencyFrom"
                  render={({ field }) => {
                    return (
                      <SelectSearch
                        label={'Отдаете'}
                        options={inOptions}
                        placeholder={'Выберите валюту'}
                        onChange={field.onChange}
                        value={field.value}
                      />
                    );
                  }}
                />

                <Controller
                  control={form.control}
                  name="amountFrom"
                  render={({ field }) => {
                    return (
                      <Input
                        name="amountFrom"
                        placeholder={'Введите сумму'}
                        type="number"
                        autoComplete="off"
                        error={form.formState.errors.amountFrom?.message}
                        inputMode="numeric"
                        disabled={comissionLoading}
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                          setLastTouchedInput("FROM");
                        }}
                        icon={{
                          right: fields.currencyFrom &&
                            fields.currencyFrom.currency.linkToIcon && (
                              <img
                                src={fields.currencyFrom.currency.linkToIcon}
                                sizes="24"
                                height="24"
                                width={24}
                                alt={
                                  fields.currencyFrom.currency.shortName ||
                                  "icon"
                                }
                              />
                            ),
                        }}
                      />
                    );
                  }}
                />
              </Space>

              <Space
                className={cn("swap__button-swap", {
                  ["swap__button-swap--active"]: isFlipped,
                })}
                flex
                align="center"
                columnGap="const-level2"
                justify="space-between"
              >
                <Divider type="solid" />

                <Button variant="icon-secondary" onClick={flip}>
                  <IconSwap className="icon icon--size-base" />
                </Button>

                <Divider type="solid" />
              </Space>

              <Space
                flex
                className="swap__group-item"
                direction="column"
                rowGap="level1"
              >
                <Controller
                  name="currencyTo"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <SelectSearch
                        label={'Получаете'}
                        options={outOptions}
                        placeholder={'Выберите валюту'}
                        onChange={field.onChange}
                        value={field.value}
                      />
                    );
                  }}
                />

                <Controller
                  control={form.control}
                  name="amountTo"
                  render={({ field }) => {
                    return (
                      <Input
                        name="currencyCrypto"
                        placeholder={'Введите сумму'}
                        type="number"
                        error={form.formState.errors.amountTo?.message}
                        disabled={comissionLoading}
                        autoComplete="off"
                        inputMode="numeric"
                        value={field.value}
                        onChange={(val) => {
                          field.onChange(val);
                          setLastTouchedInput("TO");
                        }}
                        icon={{
                          right: fields.currencyTo &&
                            fields.currencyTo.currency.linkToIcon && (
                              <img
                                src={fields.currencyTo.currency.linkToIcon}
                                sizes="24"
                                height="24"
                                width={24}
                                alt={
                                  fields.currencyTo.currency.shortName || "icon"
                                }
                              />
                            ),
                        }}
                      />
                    );
                  }}
                />
              </Space>
            </Space>
          </Space>
        </div>
        <Space direction="column" flex rowGap="const-level4">
          <Button disabled={comissionLoading} onClick={handleCalculatorSubmit}>
            <TextButton weight="bold">Обменять</TextButton>
          </Button>
        </Space>
      </Space>
    </Box>
  );
};

