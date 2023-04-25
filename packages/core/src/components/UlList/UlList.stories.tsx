import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UlList, UlListItem } from "../UlList";
import { BodyM } from "../Text";

const meta = {
	title: "Kit/UlList",
	component: UlList,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое списка",
		},
		rowGap: {
			description: "Вертикальные отступ между элементами списка",
			table: {
				category: "Типы отступов",
			},
			control: {
				type: "select",
			},
		},
		variant: {
			description: "Варианты списка",
			control: {
				type: "select",
			},
			table: {
				category: "Типы вариантов списка",
			},
		},
	},
} satisfies Meta<typeof UlList>;

export default meta;
type Story = StoryObj<typeof UlList>;

export const Default: Story = {
	args: {
		variant: "base",
		children: [
			<UlListItem>
				<BodyM>Пункт 1</BodyM>
			</UlListItem>,
			<UlListItem>
				<BodyM>Пункт 2</BodyM>
			</UlListItem>,
		],
	},
};
