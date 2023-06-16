import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonAdaptiveWidth } from "../ButtonAdaptiveWidth";
import { Button } from "../Button/Button";
import { TextButton } from "../Text";

const meta: Meta<typeof ButtonAdaptiveWidth> = {
	title: "Matbea/ButtonAdaptiveWidth",
	component: ButtonAdaptiveWidth,
	argTypes: {
		children: {
			description: "Варианты бэкграуда",
		},
		breakpoints: {
			description: "Контрольные точки на которых меняются состояние компонента",
		},
		size: {
			description: "Размер кнопки на всю длину или длину кнопки",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonAdaptiveWidth>;

export const Default: Story = {
	args: {
		children: "Комопнет меняет размер кнопки в заисимости от разрешения",
	},
	render: ({ ...args }) => (
		<ButtonAdaptiveWidth {...args}>
			<Button>
				<TextButton>Button</TextButton>
			</Button>
		</ButtonAdaptiveWidth>
	),
};

export const Breakpoints: Story = {
	args: {
		children: "Комопнет меняет размер кнопки в заисимости от разрешения",
		breakpoints: {
			md: {
				size: "auto",
			},
			xl: {
				size: "full",
			},
		},
	},
	render: ({ ...args }) => (
		<ButtonAdaptiveWidth {...args}>
			<Button>
				<TextButton>Button</TextButton>
			</Button>
		</ButtonAdaptiveWidth>
	),
};
