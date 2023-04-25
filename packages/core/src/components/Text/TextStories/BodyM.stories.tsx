import type { Meta, StoryObj } from "@storybook/react";
import { BodyM } from "../Text";

const meta = {
	title: "Kit/Text/BodyM",
	component: BodyM,
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
} satisfies Meta<typeof BodyM>;

export default meta;
type Story = StoryObj<typeof BodyM>;

export const Default: Story = {
	args: {
		children: "BodyM",
	},
};
