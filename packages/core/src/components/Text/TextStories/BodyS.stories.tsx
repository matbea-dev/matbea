import type { Meta, StoryObj } from "@storybook/react";
import { BodyS } from "../Text";

const meta = {
	title: "Kit/Text/BodyS",
	component: BodyS,
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
		tag: {
			description: "Изменение html тэга",
		},
		weight: {
			description: "Жирность текста",
		},
	},
} satisfies Meta<typeof BodyS>;

export default meta;
type Story = StoryObj<typeof BodyS>;

export const Default: Story = {
	args: {
		children: "BodyS",
	},
};
