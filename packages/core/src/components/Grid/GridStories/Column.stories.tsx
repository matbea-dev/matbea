import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Column } from "../Column";
import { Row } from "../Row";
import { Button } from "../../Button";

const meta = {
	title: "Kit/Grid/Column",
	component: Column,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое компонента",
		},
		col: {
			description: "Размер колонки",
			control: { type: "select" },
		},
		order: {
			description: "Порядок элементов",
			control: { type: "select" },
		},
		alignSelf: {
			description: "Выравнивание внутри ячеек по вертикале",
			control: { type: "select" },
		},
		breakpoints: {
			description: "Контрольные точки (md, lg, xl, xxl), задает свойства в зависимости от ширины экрана от 768рх, 992рх, 1200рх, 1400рх",
		},
	},
} satisfies Meta<typeof Column>;

export default meta;

type Story = StoryObj<typeof Column>;

export const Default: Story = {
	args: {
		col: 6,
		children: (
			<Row>
				<Button width="full">Кнопка 1</Button>
			</Row>
		),
	},
};

export const Cols: Story = {
	args: {
		children: (
			<Row>
				<Column col={6}>
					<Button width="full">Кнопка 1</Button>
				</Column>
				<Column col={6}>
					<Button width="full">Кнопка 2</Button>
				</Column>
			</Row>
		),
	},
};
