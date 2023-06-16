import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "../Search";

const meta: Meta<typeof Search> = {
	title: "Kit/Search",
	component: Search,
	argTypes: {
		onClick: {
			description: "Клик для поиска",
			table: {
				category: "Действия",
			},
		},
		placeholder: {
			description: "Подсказка внутри поля",
			table: {
				category: "Текстовые поля",
			},
		},
		value: {
			description: "Значение в input",
			table: {
				category: "Текстовые поля",
			},
		},
		onChange: {
			description: "Действие при изменении текстового поля",
			table: {
				category: "Действия",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
	args: {
		placeholder: "Поиск",
	},
	render: ({ ...args }) => <Search {...args} />,
};
