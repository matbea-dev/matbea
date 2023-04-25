import type { Meta, StoryObj } from "@storybook/react";
import { SliderHeadline } from "../Text";

const meta = {
	title: "Kit/Text/SliderHeadline",
	component: SliderHeadline,
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
} satisfies Meta<typeof SliderHeadline>;

export default meta;
type Story = StoryObj<typeof SliderHeadline>;

export const Default: Story = {
	args: {
		children: "SliderHeadline",
	},
};
