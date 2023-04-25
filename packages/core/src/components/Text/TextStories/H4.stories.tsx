import type { Meta, StoryObj } from "@storybook/react";
import { H4 } from "../Text";

const meta = {
	title: "Kit/Text/H4",
	component: H4,
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
		id: {
			description: "Передача id",
		},
	},
} satisfies Meta<typeof H4>;

export default meta;
type Story = StoryObj<typeof H4>;

export const Default: Story = {
	args: {
		children: "H4",
	},
};
