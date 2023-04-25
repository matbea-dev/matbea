import type { Meta, StoryObj } from "@storybook/react";
import { SliderUrl } from "../Text";

const meta = {
	title: "Kit/Text/SliderUrl",
	component: SliderUrl,
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
} satisfies Meta<typeof SliderUrl>;

export default meta;
type Story = StoryObj<typeof SliderUrl>;

export const Default: Story = {
	args: {
		children: "SliderUrl",
	},
};
