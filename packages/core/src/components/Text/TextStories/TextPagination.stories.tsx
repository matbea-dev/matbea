import type { Meta, StoryObj } from "@storybook/react";
import { TextPagination } from "../Text";

const meta = {
	title: "Kit/Text/TextPagination",
	component: TextPagination,
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
} satisfies Meta<typeof TextPagination>;

export default meta;
type Story = StoryObj<typeof TextPagination>;

export const Default: Story = {
	args: {
		children: "TextPagination",
	},
};
