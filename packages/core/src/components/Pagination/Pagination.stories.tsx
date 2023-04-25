import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../Pagination";

const meta = {
	title: "Kit/Pagination",
	component: Pagination,
	tags: ["autodocs"],
	argTypes: {
		numOfPages: {
			description: "Количество страниц",
		},
		currentPage: {
			description: "Номер текущей страницы",
		},
		onPageChange: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
	args: {
		numOfPages: 5,
		currentPage: 3,
	},
};
