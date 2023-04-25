import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectCustom } from "../SelectCustom";

const meta = {
	title: "Kit/SelectCustom",
	component: SelectCustom,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "Лейбл селекта",
			table: {
				category: "Текстовые поля",
			},
		},
		options: {
			description: "Элемент <option> используется для определения пункта списка контейнера <select>",
		},
		defaultValue: {
			description: "Значение по умолчанию, которое выводится в поле <select>",
		},
		placeholder: {
			description: "Подсказка внутри поля <select>",
			table: {
				category: "Текстовые поля",
			},
		},
		noti: {
			description: "Уведомление, которое появляется только при ошибке",
			table: {
				category: "Текстовые поля",
			},
		},
		onChange: {
			description: "Уведомление",
			table: {
				disable: true,
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
	},
} satisfies Meta<typeof SelectCustom>;

export default meta;
type Story = StoryObj<typeof SelectCustom>;

const optionDropDown = [
	{
		value: "Пункт 1",
		label: "Пункт 1",
	},
	{
		value: "Пункт 2",
		label: "Пункт 2",
	},
	{
		value: "Пункт 2",
		label: "Пункт 2",
	},
	{
		value: "Пункт 3",
		label: "Пункт 3",
	},
	{
		value: "Пункт 4",
		label: "Пункт 4",
	},
	{
		value: "Пункт 5",
		label: "Пункт 5",
	},
];

export const Default: Story = {
	args: {
		label: "Название",
		placeholder: "Селект",
		options: optionDropDown,
		disabled: false,
		error: false,
	},
};

export const DefaultValue: Story = {
	args: {
		label: "Название",
		placeholder: "Селект",
		options: optionDropDown,
		defaultValue: optionDropDown[1],
		disabled: false,
		error: false,
	},
};

export const NoLabel: Story = {
	args: {
		placeholder: "Селект",
		options: optionDropDown,
		disabled: false,
		error: false,
	},
};

export const Disabled: Story = {
	args: {
		label: "Название",
		placeholder: "Селект",
		options: optionDropDown,
		defaultValue: optionDropDown[1],
		disabled: true,
		error: false,
	},
};

export const Error: Story = {
	args: {
		label: "Название",
		placeholder: "Селект",
		options: optionDropDown,
		defaultValue: optionDropDown[1],
		disabled: false,
		noti: "Error message",
		error: true,
	},
};
