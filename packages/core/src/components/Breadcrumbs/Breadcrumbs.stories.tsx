import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../Breadcrumbs";

const meta = {
	title: "Kit/Breadcrumbs",
	component: Breadcrumbs,
	tags: ["autodocs"],
	argTypes: {
		breadcrumbs: {
			description: "Список хлебных крошек",
		},
	},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
	args: {
		breadcrumbs: [
			{
				link: {
					text: "Link 1",
					href: "#",
				},
			},
			{
				link: {
					text: "Link 2",
					href: "#",
				},
			},
			{
				link: {
					text: "Link 3",
					href: "#",
				},
			},
			{
				text: "Part",
			},
		],
	},
};

// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Breadcrumbs } from "./Breadcrumbs";

// export default {
//   title: "Kit/Breadcrumbs",
//   component: Breadcrumbs,

// } as ComponentMeta<typeof Breadcrumbs>;

// const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
//   <Breadcrumbs {...args} />
// );

// export const Default = Template.bind({});

// Default.args = {

// };
