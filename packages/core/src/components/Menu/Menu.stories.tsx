import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuItem } from "../Menu";
import { LinkExtern } from "../LinkExtern";

const meta = {
	title: "Kit/Menu",
	component: Menu,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое компонента",
		},
		align: {
			description: "Выравнивание элементов по вертикале",
			control: {
				type: "select",
			},
			table: {
				category: "Типы выравнивания",
			},
		},
		direction: {
			description: "Направление элементов внутри",
			table: {
				category: "Тип Направления элементов",
			},
		},
		rowGap: {
			description: "Размер отступов по вертикале",
			table: {
				category: "Типы отступов",
			},
		},
		columnGap: {
			description: "Размер отступов по горизонтале",
			control: {
				type: "select",
			},
			table: {
				category: "Типы отступов",
			},
		},
	},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
	args: {
		children: [
			<MenuItem>
				<LinkExtern href="#">Link</LinkExtern>
			</MenuItem>,

			<MenuItem>
				<LinkExtern href="#">Link 2</LinkExtern>
			</MenuItem>,

			<MenuItem>
				<LinkExtern href="#">Link 3</LinkExtern>
			</MenuItem>,
		],
	},
};
