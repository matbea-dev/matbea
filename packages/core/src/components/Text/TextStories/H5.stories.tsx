import type { Meta, StoryObj } from "@storybook/react";
import { H5 } from "../Text";

const meta = {
	title: "Kit/Text/H5",
	component: H5,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Текст",
		},
		color: {
			description: "Цвет текста",
		},
		align: {
			description: "Выравнивание текста",
		},
		weight: {
			description: "Жирность текста",
		},
	},
} satisfies Meta<typeof H5>;

export default meta;
type Story = StoryObj<typeof H5>;

export const Default: Story = {
	args: {
		children: "H5",
	},
};
