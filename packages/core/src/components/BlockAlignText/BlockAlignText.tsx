import React from "react";
import cn from "classnames";
import "./block-align-text.scss";

type BlockAlignTextProps = {
	children: React.ReactNode;
	align?: Align;
	breakpoints?: {
		md?: BlockAlignTextTypes;
		lg?: BlockAlignTextTypes;
		xl?: BlockAlignTextTypes;
		xxl?: BlockAlignTextTypes;
	};
};

type BlockAlignTextTypes = {
	align?: Align;
};

type Align = "left" | "center" | "right";

export const BlockAlignText: React.FC<BlockAlignTextProps> = ({ children, align, breakpoints }) => {
	let breakpointsValue = "";

	breakpoints &&
		Object.keys(breakpoints).forEach((key) => {
			const isKeyCorrected = key === "md" || key === "lg" || key === "xl" || key === "xxl";

			if (isKeyCorrected && breakpoints[key]?.align) {
				breakpointsValue += `block-align-text--${key}-align-${breakpoints[key]?.align} `;
			}
		});

	return (
		<div
			className={cn(
				"block-align-text",
				{
					[`block-align-text--align-${align}`]: align,
				},
				breakpointsValue
			)}
		>
			{children}
		</div>
	);
};
