import type { Meta, StoryObj } from "@storybook/react";
import { BodyXl } from "../Text";

const meta = {
	title: "Kit/Text/BodyXl",
	component: BodyXl,
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
} satisfies Meta<typeof BodyXl>;

export default meta;
type Story = StoryObj<typeof BodyXl>;

export const Default: Story = {
	args: {
		children: "BodyXl",
	},
};
