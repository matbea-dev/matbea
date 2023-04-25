import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HtmlContent } from "../HtmlContent";

const meta = {
	title: "Kit/HtmlContent",
	component: HtmlContent,
	tags: ["autodocs"],
	argTypes: {
		content: {
			description: "HTML разметка, приходящая с бекэнда",
		},
	},
} satisfies Meta<typeof HtmlContent>;

export default meta;
type Story = StoryObj<typeof HtmlContent>;

export const Default: Story = {
	args: {
		content: "Контент <br > текст",
	},
};

// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { HtmlContent } from "./HtmlContent";

// export default {
//   title: "Kit/HtmlContent",
//   component: HtmlContent,

// } as ComponentMeta<typeof HtmlContent>;

// const Template: ComponentStory<typeof HtmlContent> = (args) => (
//   <HtmlContent {...args} />
// );

// export const Default = Template.bind({});

// Default.args = {

// };
