import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconText } from "../IconText";

const meta = {
	title: "Kit/IconText",
	component: IconText,
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
		},
		direction: {
			description: "Направление элементов внутри",
		},
		rowGap: {
			description: "Размер отступов по вертикале",
			control: {
				type: "select",
			},
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
} satisfies Meta<typeof IconText>;

export default meta;
type Story = StoryObj<typeof IconText>;

export const Default: Story = {
	args: {
		children: "IconText",
	},
};

// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { IconText } from "../IconText";
// import IconLinkedin from "../../assets/icons/icon--linkedin.svg";
// import { BodyXl } from "../Text";

// export default {
//   title: "Kit/IconText",
//   component: IconText,

// } as ComponentMeta<typeof IconText>;

// const Template: ComponentStory<typeof IconText> = (args) => (
//   <IconText {...args}>
//     <IconLinkedin className="icon icon--linkedin icon--size-lg" />
//     <BodyXl>Lorem ipsum dolor sit amet i.</BodyXl>
//   </IconText>
// );

// export const Default = Template.bind({});

// Default.args = {
//   children: "Содержимое компонента",
// };
