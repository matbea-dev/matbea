import React from "react";
import cn from "classnames";
import "./ul-list.scss";

type UlListProps = {
	children: React.ReactNode;
	rowGap?: RowGap;
	variant?: Variant;
};

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

type Variant = "base" | "decimal" | "circle" | "no-variant";

export const UlList: React.FC<UlListProps> = ({ rowGap = "const-level1", variant = "no-style", children }) => (
	<ul
		className={cn("ul-list", {
			[`ul-list--gap-${rowGap}`]: rowGap,
			[`ul-list--${variant}`]: variant,
		})}
	>
		{children}
	</ul>
);

type UlListItemProps = {
	children: React.ReactNode;
};

export const UlListItem: React.FC<UlListItemProps> = ({ children }) => <li className="ul-list__item">{children}</li>;
