import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "../Button";

const meta = {
	title: "Kit/Button/ButtonLink",
	component: ButtonLink,
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
		url: {
			description: "Адресс",
			table: {
				category: "URL адресс",
			},
		},
		target: {
			description: "Загружает страницу в новое окно браузера",
			table: {
				category: "Другие настройки",
			},
		},
	},
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
	args: {
		url: "#",
		children: "ButtonLink",
	},
};
