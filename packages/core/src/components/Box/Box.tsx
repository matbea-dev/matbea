import React, { CSSProperties } from "react";
import cn from "classnames";
import "./box.scss";

type BoxProps = {
	paddingTop?: Spacer;
	paddingBottom?: Spacer;
	borderRadius?: BorderRadius;
	bgColor?: BgColor;
	shadow?: Shadow;
	children: React.ReactNode;
	style?: CSSProperties,
	className?: string;
	breakpoints?: {
		md?: BoxTypes;
		lg?: BoxTypes;
		xl?: BoxTypes;
		xxl?: BoxTypes;
	};
};

type BoxTypes = {
	shadow?: Shadow;
	borderRadius?: BorderRadius;
};

type Shadow = "primary" | "secondary" | "tertiary";

type BgColor = "primary" | "secondary" | "tertiary" | "fourth" | "fifth" | "six";

type BorderRadius = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type Spacer =
	| "level1"
	| "level2"
	| "level3"
	| "level4"
	| "level5"
	| "level6"
	| "level7"
	| "level8"
	| "level9"
	| "level10"
	| "const-level1"
	| "const-level2"
	| "const-level3"
	| "const-level4"
	| "const-level5";

export const Box: React.FC<BoxProps> = ({ style ,paddingTop, paddingBottom, borderRadius, bgColor, shadow, children, breakpoints, className }) => {
	let breakpointsValue = "";

	breakpoints &&
		Object.keys(breakpoints).forEach((key) => {
			const isKeyCorrected = key === "md" || key === "lg" || key === "xl" || key === "xxl";

			if (isKeyCorrected && breakpoints[key]?.borderRadius) {
				breakpointsValue += `box--${key}-border-radius-${breakpoints[key]?.borderRadius} `;
			}

			if (isKeyCorrected && breakpoints[key]?.shadow) {
				breakpointsValue += `box--${key}-shadow-${breakpoints[key]?.shadow} `;
			}
		});

	return (
		<div
			style={style}
			className={cn(
				"box",
				{
					[`box--padding-top-${paddingTop}`]: paddingTop,
					[`box--padding-bottom-${paddingBottom}`]: paddingBottom,
					[`box--border-radius-${borderRadius}`]: borderRadius,
					[`box--shadow-${shadow}`]: shadow,
					[`box--bg-color-${bgColor}`]: bgColor,
				},
				breakpointsValue,
				className
			)}
		>
			{children}
		</div>
	);
};
