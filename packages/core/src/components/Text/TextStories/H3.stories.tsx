import type { Meta, StoryObj } from "@storybook/react";
import { H3 } from "../Text";

const meta = {
	title: "Kit/Text/H3",
	component: H3,
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
} satisfies Meta<typeof H3>;

export default meta;
type Story = StoryObj<typeof H3>;

export const Default: Story = {
	args: {
		children: "H3",
	},
};
