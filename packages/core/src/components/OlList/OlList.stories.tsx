import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OlList, OlListItem } from "../OlList";

const meta = {
	title: "Kit/OlList",
	component: OlList,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое списка",
		},
		rowGap: {
			description: "Вертикальные отступ между элементами списка",
			control: {
				type: "select",
			},
			table: {
				category: "Типы отступов",
			},
		},
		colorText: {
			description: "Цвет текста",
			table: {
				category: "Текстовые настройки",
			},
		},
		sizeText: {
			description: "Размер текста",
			control: {
				type: "select",
			},
			table: {
				category: "Текстовые настройки",
			},
		},
	},
} satisfies Meta<typeof OlList>;

export default meta;
type Story = StoryObj<typeof OlList>;

export const Default: Story = {
	args: {
		children: [
			<OlListItem>Пункт 1</OlListItem>,
			<OlListItem>Пункт 2</OlListItem>,

			<OlListItem>
				Пункт 3
				<OlList>
					<OlListItem>Пункт 1</OlListItem>
					<OlListItem>Пункт 2</OlListItem>

					<OlListItem>
						Пункт 3
						<OlList>
							<OlListItem>Пункт 1</OlListItem>
							<OlListItem>Пункт 2</OlListItem>

							<OlListItem>Пункт 3</OlListItem>
						</OlList>
					</OlListItem>
				</OlList>
			</OlListItem>,
		],
	},
};
