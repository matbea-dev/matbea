import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BlockText } from "../BlockText";
import { BodyXl, H2 } from "../Text";

const meta = {
	title: "Kit/BlockText",
	component: BlockText,
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Содержимое",
		},
	},
} satisfies Meta<typeof BlockText>;

export default meta;
type Story = StoryObj<typeof BlockText>;

export const Default: Story = {
	render: () => (
		<BlockText>
			<H2>Title H2</H2>
			<BodyXl>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reiciendis, ullam facere culpa harum ducimus facilis enim blanditiis modi itaque voluptates est delectus corporis consequatur
				velit! Soluta repellat perspiciatis quae.
			</BodyXl>
			<BodyXl>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reiciendis, ullam facere culpa harum ducimus facilis enim blanditiis modi itaque voluptates est delectus corporis consequatur
				velit! Soluta repellat perspiciatis quae.
			</BodyXl>
			<H2>Title H2</H2>
			<BodyXl>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reiciendis, ullam facere culpa harum ducimus facilis enim blanditiis modi itaque voluptates est delectus corporis consequatur
				velit! Soluta repellat perspiciatis quae.
			</BodyXl>
		</BlockText>
	),
};

// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { BlockText } from "../BlockText";
// import { BodyXl, H2 } from "../Text";

// export default {
//   title: "Kit/BlockText",
//   component: BlockText,

// } as ComponentMeta<typeof BlockText>;

// const Template: ComponentStory<typeof BlockText> = (args) => (

// );

// export const Default = Template.bind({});

// Default.args = {
//   children: "Любое содержимое",
// };
