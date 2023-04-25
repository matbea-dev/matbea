import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Space } from "../Space";
import { BodyXl, H2 } from "../Text";

const meta = {
	title: "Kit/Space",
	component: Space,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое компонента.",
		},
		className: {
			description: "Передача класса компоненту",
		},
		align: {
			description: "Выравнивание по вертикале.",
			control: {
				type: "select",
			},
			table: {
				category: "Тип выравнивания элементов",
			},
		},
		justify: {
			description: "Выравнивание по горизонтале.",
			control: {
				type: "select",
			},
			table: {
				category: "Тип выравнивания элементов",
			},
		},
		direction: {
			description: "Направление элементов.",
			control: {
				type: "select",
			},
			table: {
				category: "Направление элементов",
			},
		},
		wrap: {
			description: "Задаёт правила вывода flex-элементов — в одну строку или в несколько, с переносом блоков.",
			table: {
				category: "Направление элементов",
			},
		},
		rowGap: {
			description: "Расстояние между элементами по вертикале.",
			control: {
				type: "select",
			},
			table: {
				category: "Тип отступов",
			},
		},
		columnGap: {
			description: "Расстояние между элементами по горизонтале.",
			control: {
				type: "select",
			},
			table: {
				category: "Тип отступов",
			},
		},
		breakpoints: {
			description: "Контрольные точки на которых меняются состояние Space",
		},
	},
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof Space>;

export const Default: Story = {
	args: {
		align: "center",
		flex: false,
		children: (
			<>
				<H2>H2</H2>
				<BodyXl>BodyXl</BodyXl>
			</>
		),
	},
};

export const Breakpoints: Story = {
	args: {
		align: "center",
		columnGap: "level1",
		children: (
			<>
				<H2>H2</H2>
				<BodyXl>BodyXl</BodyXl>
			</>
		),
		breakpoints: {
			md: { align: "end" },
			xxl: { align: "flex-start", direction: "column" },
		},
	},
};

// const Template: ComponentStory<typeof Space> = (args) => (
//   <Space {...args}>

//   </Space>
// );

// export const Default = Template.bind({});

// Default.args = {

//   children: "Сюда можно вложить любой контент",
// };

// export const Breakpoints = Template.bind({});

// Breakpoints.args = {

// };
