import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "../Row";

const meta = {
	title: "Kit/Grid/Row",
	component: Row,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое компонента",
		},
		align: {
			description: "Выравнивание элементов по вертикале",
			control: { type: "select" },
			table: {
				category: "Тип выравнивания элементов",
			},
		},
		justify: {
			description: "Выравнивание элементов по горизонтали",
			control: { type: "select" },
			table: {
				category: "Тип выравнивания элементов",
			},
		},
		direction: {
			description: "Направление элементов внутри Row",
			control: {
				type: "select",
			},
			table: {
				category: "Тип Направления элементов",
			},
		},
		rowGap: {
			description: "Размер отступов между строками",
			control: { type: "select" },
			table: {
				category: "Тип отступов",
			},
		},
		noGutters: {
			description: "Убериает margin у Row",
		},
		breakpoints: {
			description: "Контрольные точки (md, lg, xl, xxl), задает свойства в зависимости от ширины экрана от 768рх, 992рх, 1200рх, 1400рх",
		},
	},
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof Row>;

export const Default: Story = {
	args: {
		justify: "center",
		rowGap: "constancy-level4",
		noGutters: true,
		children: "Содержимое компонента",
	},
};
