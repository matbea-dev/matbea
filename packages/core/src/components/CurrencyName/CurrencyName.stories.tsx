import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CurrencyName } from "./CurrencyName";
// @ts-ignore
import IconBtc from "../../assets/imgs/icon--bitcoin.png";

const meta: Meta<typeof CurrencyName> = {
	title: "Kit/CurrencyName",
	component: CurrencyName,
	argTypes: {
		icon: {
			description: "Иконка валюты",
			table: {
				category: "Параметры компонента",
			},
		},
		iconSize: {
			description: "Размер иконки валюты",
			table: {
				category: "Параметры компонента",
			},
		},
		name: {
			description: "Название валюты",
			table: {
				category: "Параметры компонента",
			},
		},
		short: {
			description: "Короткое название валюты",
			table: {
				category: "Параметры компонента",
			},
		},
		variant: {
			description: "Варианты компонента",
		},
	},
};

export default meta;

type Story = StoryObj<typeof CurrencyName>;

export const Default: Story = {
	args: {
		icon: "Иконка валюты",
		name: "BTC",
		iconSize: "base",
	},
	render: ({ ...args }) => <CurrencyName {...args} icon={<img src={IconBtc} alt="coinBtc" />} />,
};

export const FullName: Story = {
	args: {
		icon: "Иконка валюты",
		name: "Ethereum Classic",
		short: "ETC",
		iconSize: "base",
	},
	render: ({ ...args }) => <CurrencyName {...args} icon={<img src={IconBtc} alt="coinBtc" />} />,
};

export const OnlyName: Story = {
	args: {
		name: "BTC",
	},
	render: ({ ...args }) => <CurrencyName {...args} icon={<img src={IconBtc} alt="coinBtc" />} />,
};
