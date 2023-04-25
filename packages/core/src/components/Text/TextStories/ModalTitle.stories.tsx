import type { Meta, StoryObj } from "@storybook/react";
import { ModalTitle } from "../Text";

const meta = {
	title: "Kit/Text/ModalTitle",
	component: ModalTitle,
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
} satisfies Meta<typeof ModalTitle>;

export default meta;
type Story = StoryObj<typeof ModalTitle>;

export const Default: Story = {
	args: {
		children: "ModalTitle",
	},
};
