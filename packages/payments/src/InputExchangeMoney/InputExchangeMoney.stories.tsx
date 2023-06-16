// eslint-disable-next-line
// @ts-nocheck
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputExchangeMoney } from "./InputExchangeMoney";
import Curencys from "./mocks/curencys.json";

const meta: Meta<typeof InputExchangeMoney> = {
	title: "Kit/InputExchangeMoney",
	component: InputExchangeMoney,
	argTypes: {
		name: {
			description: "Имя(ID) поля в DOM",
			table: {
				category: "Текстовые поля",
			},
		},
		label: {
			description: "Лейбл к полю ввода",
			table: {
				category: "Текстовые поля",
			},
		},
		amountValue: {
			description: "Лейбл к полю ввода",
			table: {
				category: "Текстовые поля",
			},
		},
		placeholder: {
			description: "Подсказка внутри поля",
			table: {
				category: "Текстовые поля",
			},
		},
		disabled: {
			description: "Делает поле неактивным",
			table: {
				category: "Типы состояний",
			},
		},
		error: {
			description: "Вывод ошибки - ошибка",
			table: {
				category: "Типы состояний",
			},
		},
		maxLength: {
			description: "Максимальный набор текста",
			table: {
				category: "Другие настройки",
			},
		},
		required: {
			description: "Устанавливает поле формы обязательным для заполнения перед отправкой формы на сервер",
			table: {
				category: "Другие настройки",
			},
		},
		autoComplete: {
			description: "Атрибут помогает заполнять поля форм текстом, который был введён в них ранее",
			table: {
				category: "Другие настройки",
			},
		},
		inputMode: {
			description: "Атрибут inputmode говорит браузеру на устройствах с экранной клавиатурой какой набор символов показать при вводе данных в конкретное поле.",
			table: {
				category: "Другие настройки",
			},
		},
		options: {
			description: "Список выводв option",
			table: {
				category: "Данные",
			},
		},
		value: {
			description: "Данные option",
			table: {
				category: "Данные",
			},
		},
		onAmountChange: {
			description: "Действие при изменении текстового поля",
			table: {
				category: "События",
			},
		},
		onAmountBlur: {
			description: "Событие вызывается при пропадании фокуса с элемента",
			table: {
				category: "События",
			},
		},
		onChange: {
			description: "Действие с элементом выпадающего списка(option)",
			table: {
				category: "Данные",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof InputExchangeMoney>;

export const Default: Story = {
	args: {
		name: "InputTest",
		label: "Отдаете",

		placeholder: "Введите сумму",
		value: {
			value: "string",
			label: "",
			currency: Curencys.bnb,
			paymentSystemId: 1,
			exchanges: [1, 3, 3],
			type: "P",
		},
		options: [
			{
				value: "value",
				label: "",
				currency: Curencys.bnb,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.btc,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.tether,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.ltc,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.zec,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.xmr,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.doge,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.dash,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
		],
		amountValue: "100",
		onChange: () => null,
		onAmountChange: () => null,
	},
	render: ({ ...args }) => <InputExchangeMoney {...args} />,
};

export const Error: Story = {
	args: {
		name: "InputTest",
		label: "Отдаете",
		placeholder: "Введите сумму",
		value: {
			value: "string",
			label: "",
			currency: Curencys.bnb,
			paymentSystemId: 1,
			exchanges: [1, 3, 3],
			type: "P",
		},
		options: [
			{
				value: "value",
				label: "",
				currency: Curencys.bnb,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.btc,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.tether,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.ltc,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.zec,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.xmr,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.doge,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
			{
				value: "value",
				label: "",
				currency: Curencys.dash,
				paymentSystemId: 1,
				exchanges: [1, 3, 3],
				type: "P",
			},
		],
		error: "от 100 RUB",
		amountValue: "0.1212879",
		onChange: () => null,
		onAmountChange: () => null,
	},
	render: ({ ...args }) => <InputExchangeMoney {...args} />,
};
