import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BlockAlignText } from "../BlockAlignText";
import { VerticalOffset } from "../Grid";
import { BodyXl, H1 } from "../Text";

const meta = {
	title: "Kit/BlockAlignText",
	component: BlockAlignText,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое",
		},
		align: {
			description: "Выравнивание текста",
			control: {
				type: "select",
			},
			table: {
				category: "Типы выравнивания",
			},
		},
		breakpoints: {
			description: "Контрольные точки на которых меняется состояние",
		},
	},
} satisfies Meta<typeof BlockAlignText>;

export default meta;
type Story = StoryObj<typeof BlockAlignText>;

export const Default: Story = {
	args: {
		children: (
			<>
				<VerticalOffset offset="level3">
					<H1>Заголовок</H1>

					<BodyXl>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga nostrum numquam, aliquam perspiciatis a voluptatibus, suscipit fugiat voluptatum, commodi dolore mollitia esse
						asperiores? Ea in rem tempora dignissimos voluptates?
					</BodyXl>
				</VerticalOffset>
			</>
		),
	},
};

export const Breakpoints: Story = {
	args: {
		children: "Содержимое",
		align: "left",
		breakpoints: {
			md: {
				align: "center",
			},
			xl: {
				align: "right",
			},
		},
	},
};
