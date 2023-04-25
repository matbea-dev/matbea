import type { Meta, StoryObj } from "@storybook/react";
import { FormInputText } from "../Text";

const meta = {
	title: "Kit/Text/FormInputText",
	component: FormInputText,
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
} satisfies Meta<typeof FormInputText>;

export default meta;
type Story = StoryObj<typeof FormInputText>;

export const Default: Story = {
	args: {
		children: "FormInputText",
	},
};
