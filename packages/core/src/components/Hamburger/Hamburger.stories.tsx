import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Hamburger } from "../Hamburger";

const meta = {
	title: "Kit/Hamburger",
	component: Hamburger,
	tags: ["autodocs"],
	argTypes: {
		active: {
			description: "Состояние",
		},
		onClick: {
			description: "Действие по клику",
		},
	},
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof Hamburger>;

export const Default: Story = {
	args: {
		active: false,
		onClick: () => {},
	},
};
