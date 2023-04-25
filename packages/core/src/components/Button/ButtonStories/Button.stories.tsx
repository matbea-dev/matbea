import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta = {
	title: "Kit/Button/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Текст в кнопке",
			argName: "label",
		},
		size: {
			description: "Размер кнопки",
			table: {
				category: "Типы размеров кнопки",
			},
		},
		variant: {
			description: "Варианты кнопки",
			table: {
				category: "Типы вариантов кнопки",
			},
			control: {
				type: "select",
			},
		},
		width: {
			description: "Длина кнопки",
			table: {
				category: "Типы длин кнопки",
			},
		},
		type: {
			description: "Тип кнопки",
			table: {
				category: "Тип кнопки",
			},
		},
		disabled: {
			description: "Блокировка кнопки",
			table: {
				category: "Вид состояния кнопки",
			},
		},
		onClick: {
			description: "Действие по клику",
			table: {
				category: "Тип действия по кнопке",
			},
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
	},
};
