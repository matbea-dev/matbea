import type { Meta, StoryObj } from "@storybook/react";
import { H2 } from "../Text";

const meta = {
	title: "Kit/Text/H2",
	component: H2,
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
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof H2>;

export const Default: Story = {
	args: {
		children: "H2",
	},
};
