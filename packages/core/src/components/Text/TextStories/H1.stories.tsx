import type { Meta, StoryObj } from "@storybook/react";
import { H1 } from "../Text";

const meta = {
	title: "Kit/Text/H1",
	component: H1,
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
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof H1>;

export const Default: Story = {
	args: {
		children: "H1",
	},
};
