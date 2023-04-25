import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { BodyXl, H2 } from "../Text";

const meta = {
	title: "Kit/Box",
	component: Box,
	tags: ["autodocs"],
	argTypes: {
		paddingTop: {
			description: "Внутренний отступ сверху",
			table: {
				category: "Тип отступов",
			},
		},
		paddingBottom: {
			description: "Внутренний отступ снизу",
			table: {
				category: "Тип отступов",
			},
		},
		borderRadius: {
			description: "Устанавливает радиус скругления уголков рамки. Если рамка не задана, то скругление также происходит и с фоном.",
		},
		bgColor: {
			description: "Определяет цвет фона элемента. ",
			control: {
				type: "select",
			},
			table: {
				category: "Параметры фона",
			},
		},
		shadow: {
			description: "Добавляет тень к элементу.",
			control: {
				type: "select",
			},
			table: {
				category: "Параметры фона",
			},
		},
		className: {
			description: "Передача класса компоненту",
		},
		breakpoints: {
			description: "Контрольные точки на которых меняются состояние Box",
		},
		children: {
			description: "Содержимое блока",
		},
	},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		children: (
			<>
				<H2>Title H2</H2>
				<BodyXl>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reiciendis, ullam facere culpa harum ducimus facilis enim blanditiis modi itaque voluptates est delectus corporis consequatur
					velit! Soluta repellat perspiciatis quae.
				</BodyXl>
			</>
		),
	},
};

export const Breakpoints: Story = {
	args: {
		children: "Любое содержимое",
		borderRadius: 4,
		shadow: "tertiary",
		paddingBottom: "level2",
		paddingTop: "level2",
		breakpoints: {
			md: {
				borderRadius: 5,
				shadow: "secondary",
			},
			lg: {
				borderRadius: 7,
				shadow: "secondary",
			},
			xl: {
				borderRadius: 8,
				shadow: "primary",
			},
			xxl: {
				borderRadius: 10,
				shadow: "secondary",
			},
		},
	},
};
