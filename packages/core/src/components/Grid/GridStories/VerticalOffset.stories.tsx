import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VerticalOffset } from "../VerticalOffset";
import { Button } from "../../Button";

const meta = {
	title: "Kit/Grid/VerticalOffset",
	component: VerticalOffset,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое компонента",
		},
		offset: {
			description: "Размер отступов между элементами",
		},
		variant: {
			description: "Тип отступа",
		},
	},
} satisfies Meta<typeof VerticalOffset>;

export default meta;

type Story = StoryObj<typeof VerticalOffset>;

export const Default: Story = {
	args: {
		offset: "level1",
		children: (
			<>
				<Button width="full">Кнопка 1</Button>
				<Button width="full">Кнопка 2</Button>
			</>
		),
	},
};
