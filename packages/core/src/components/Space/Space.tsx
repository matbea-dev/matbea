import React from "react";
import cn from "classnames";
import "./space.scss";

type SpaceProps = {
	children: React.ReactNode;
	align?: Align;
	justify?: Justify;
	direction?: Direction;
	flex?: boolean;
	wrap?: "wrap" | "wrap-reverse";
	rowGap?: RowGap;
	columnGap?: ColumnGap;
	className?: string;
	breakpoints?: {
		md?: SpaceTypes;
		lg?: SpaceTypes;
		xl?: SpaceTypes;
		xxl?: SpaceTypes;
	};
};

type SpaceTypes = {
	align?: Align;
	direction?: Direction;
	justify?: Justify;
};

type Direction = "row" | "row-reverse" | "column" | "column-reverse";

type Justify = "center" | "flex-end" | "flex-start" | "space-between" | "space-around";

type Align = "baseline" | "center" | "end" | "flex-end" | "flex-start" | "initial" | "inherit" | "normal" | "revert" | "self-end" | "self-start" | "start" | "stretch" | "unset";

type RowGap =
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

type ColumnGap = "level1" | "level2" | "level3" | "level4" | "level5" | "const-level1" | "const-level2" | "const-level3" | "const-level4" | "const-level5";

export const Space: React.FC<SpaceProps> = ({ children, align, justify, flex, wrap, direction, rowGap, columnGap, breakpoints, className }) => {
	let breakpointsValue = "";

	breakpoints &&
		Object.keys(breakpoints).forEach((key) => {
			const isKeyCorrected = key === "md" || key === "lg" || key === "xl" || key === "xxl";

			if (isKeyCorrected && breakpoints[key]?.align) {
				breakpointsValue += `space--${key}-align-${breakpoints[key]?.align} `;
			}
			if (isKeyCorrected && breakpoints[key]?.justify) {
				breakpointsValue += `space--${key}-justify-${breakpoints[key]?.justify} `;
			}
			if (isKeyCorrected && breakpoints[key]?.direction) {
				breakpointsValue += `space--${key}-direction-${breakpoints[key]?.direction} `;
			}
		});

	return (
		<div
			className={cn(
				"space",
				{
					[`space--align-${align}`]: align,
					[`space--justify-${justify}`]: justify,
					[`space--direction-${direction}`]: direction,
					[`space--row-gap-${rowGap}`]: rowGap,
					[`space--column-gap-${columnGap}`]: columnGap,
					[`space--${wrap}`]: wrap,
					"space--display-flex": flex,
				},
				breakpointsValue,
				className
			)}
		>
			{children}
		</div>
	);
};
