import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ImgWrapper } from "../ImgWrapper";
// @ts-ignore
import ImgVideoCapDesc from "../../assets/imgs/video__img-cap-desc.jpg";

const meta: Meta<typeof ImgWrapper> = {
	title: "Matbea/ImgWrapper",
	component: ImgWrapper,
	argTypes: {
		children: {
			description: "Содержимое компонента",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ImgWrapper>;

export const Default: Story = {
	args: {
		children: "Вставляется картинка",
	},
	render: ({ ...args }) => (
		<ImgWrapper {...args}>
			<img src={ImgVideoCapDesc} alt="альтернативный текст" />
		</ImgWrapper>
	),
};
