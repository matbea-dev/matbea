import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../Container";

const meta = {
	title: "Kit/Grid/Container",
	component: Container,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое компонента",
		},
		size: {
			description: "Размер контейнера(Size)",
			control: { type: "select" },
		},
	},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
	args: {
		children: "Содержимое",
	},
};

export const Md: Story = {
	args: {
		size: "md",
		children: "Содержимое",
	},
};

export const Fluid: Story = {
	args: {
		size: "fluid",
		children: "Содержимое",
	},
};
