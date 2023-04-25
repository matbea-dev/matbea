import React from "react";
import { BodyS } from "../Text";
import { Space } from "../Space";
import IconInfo from "../../assets/icons/icon--info.svg";

type CurrencyRateProps = {
  valueCrypto: string;
  cryptoName: string;
  valueFiat: string;
  fiatName: string;
};

console.log(IconInfo)

export const CurrencyRate: React.FC<CurrencyRateProps> = ({
  valueCrypto,
  cryptoName,
  valueFiat,
  fiatName,
}) => (
  <Space columnGap="const-level1" align="center" className="currency-rate">
    <IconInfo className="icon icon--size-md icon--fill-secondary" />
    <BodyS color="secondary">
      {valueCrypto} {cryptoName}
    </BodyS>
    <BodyS color="secondary">=</BodyS>
    <BodyS color="secondary">{valueFiat}</BodyS>
    <BodyS color="secondary">{fiatName}</BodyS>
  </Space>
);
