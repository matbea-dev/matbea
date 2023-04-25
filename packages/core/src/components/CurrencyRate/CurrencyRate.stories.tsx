import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CurrencyRate } from "./CurrencyRate";

const meta = {
  title: "Kit/CurrencyRate",
  component: CurrencyRate,
  tags: ["autodocs"],
  argTypes: {
    valueCrypto: {
      description: "Значение криптовалюты",
    },
    cryptoName: {
      description: "Имя криптовалюты",
    },
    valueFiat: {
      description: "Значение обычной валюты",
    },
    fiatName: {
      description: "Имя обычной валюты",
    },
  },
} satisfies Meta<typeof CurrencyRate>

export default meta

type Story = StoryObj<typeof CurrencyRate>;

export const Default: Story = {
	args: {
		valueCrypto: "1",
    cryptoName: "BTC",
    valueFiat: "1 709 104.96",
    fiatName: "₽",
	},
};