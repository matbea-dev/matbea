import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../Divider";

const meta = {
	title: "Kit/Divider",
	component: Divider,
	tags: ["autodocs"],
	argTypes: {
		type: {
			description: "Тип делителя",
		},
	},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
	render: () => (
		<div className="body-stories">
			<Divider type="solid" />
		</div>
	),
};

// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Divider } from "../Divider";

// export default {
//   title: "Kit/Divider",
//   component: Divider,

// } as ComponentMeta<typeof Divider>;

// const Template: ComponentStory<typeof Divider> = (args) => (
//   <div className="body-stories">
//     <Divider {...args} />
//   </div>
// );

// export const Default = Template.bind({});

// Default.args = {
//   type: "solid",
// };
