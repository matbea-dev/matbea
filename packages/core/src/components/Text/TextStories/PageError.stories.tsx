import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "../Text";

const meta = {
	title: "Kit/Text/PageError",
	component: PageError,
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
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof PageError>;

export const Default: Story = {
	args: {
		children: "PageError",
	},
};
