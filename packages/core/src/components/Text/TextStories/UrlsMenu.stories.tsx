import type { Meta, StoryObj } from "@storybook/react";
import { UrlsMenu } from "../Text";

const meta = {
	title: "Kit/Text/UrlsMenu",
	component: UrlsMenu,
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
} satisfies Meta<typeof UrlsMenu>;

export default meta;
type Story = StoryObj<typeof UrlsMenu>;

export const Default: Story = {
	args: {
		children: "UrlsMenu",
	},
};
