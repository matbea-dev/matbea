import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "../Text";

const meta = {
	title: "Kit/Text/TextButton",
	component: TextButton,
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
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
	args: {
		children: "TextButton",
	},
};
