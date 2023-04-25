import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {Calculator} from './Calculator';

const meta = {
	title: "Payments/Calculator",
	component: Calculator,
	tags: ["autodocs"],
} satisfies Meta<typeof Calculator>;

export default meta;
type Story = StoryObj<typeof Calculator>;

export const Default: Story = {
	args: {
	},
};
