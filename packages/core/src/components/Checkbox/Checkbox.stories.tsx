import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../Checkbox";

const meta = {
	title: "Kit/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "Надпись лейбла чекбокса",
			table: {
				category: "Другие настройки",
			},
		},
		children: {
			description: "Надпись рядом с чекбоксом",
			table: {
				category: "Другие настройки",
			},
		},
		disabled: {
			description: "Блокирует чекбокс",
			control: {
				type: "boolean",
			},
			table: {
				category: "Типы состояний",
			},
		},
		checked: {
			description: "Отмечает, выбран чекбокс или нет (ставит галочку)",
			control: {
				type: "boolean",
			},
			table: {
				category: "Типы состояний",
			},
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		name: "CheckboxTest",
		value: "CheckboxTest",
	},
};

export const Checked: Story = {
	args: {
		name: "CheckboxChecked",
		value: "Checkbox Checked",
		checked: true,
		disabled: false,
	},
};

export const CheckboxLabel: Story = {
	args: {
		name: "CheckboxLabel",
		value: "CheckboxLabel",
		label: "Checkbox Label",
		disabled: false,
		checked: false,
	},
};

export const CheckboxChildren: Story = {
	args: {
		name: "CheckboxChildren",
		value: "CheckboxChildren",
		children: "Checkbox Children",
		disabled: false,
		checked: false,
	},
};
