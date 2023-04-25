import type { Meta, StoryObj } from "@storybook/react";
import { FormPlaceholder } from "../Text";

const meta = {
	title: "Kit/Text/FormPlaceholder",
	component: FormPlaceholder,
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
} satisfies Meta<typeof FormPlaceholder>;

export default meta;
type Story = StoryObj<typeof FormPlaceholder>;

export const Default: Story = {
	args: {
		children: "FormPlaceholder",
	},
};
