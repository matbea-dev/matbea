import React from "react";
import cn from "classnames";
import "./icon-text.scss";

type IconTextProps = {
	children: React.ReactNode;
	align?: Align;
	rowGap?: RowGap;
	columnGap?: ColumnGap;
	direction?: Direction;
};

type Direction = "row" | "column";

type Align = "center" | "flex-end" | "flex-start" | "stretch";

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

export const IconText: React.FC<IconTextProps> = ({ children, align, rowGap, columnGap, direction = "row" }) => (
	<div
		className={cn("icon-text", {
			[`icon-text--${align}`]: align,
			[`icon-text--row-gap-${rowGap}`]: rowGap,
			[`icon-text--${direction}`]: direction,
			[`icon-text--column-gap-${columnGap}`]: columnGap,
		})}
	>
		{children}
	</div>
);
