import type { Meta, StoryObj } from "@storybook/react";
import { BodyL } from "../Text";

const meta = {
	title: "Kit/Text/BodyL",
	component: BodyL,
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
} satisfies Meta<typeof BodyL>;

export default meta;
type Story = StoryObj<typeof BodyL>;

export const Default: Story = {
	args: {
		children: "BodyL",
	},
};
