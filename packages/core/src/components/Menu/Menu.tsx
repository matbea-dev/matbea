import React from "react";
import cn from "classnames";
import "./menu.scss";

type MenuProps = {
	children: React.ReactNode;
	direction?: Direction;
	align?: Align;
	rowGap?: RowGap;
	columnGap?: ColumnGap;
};

type Direction = "row" | "column";

type Align = "center" | "flex-end" | "flex-start" | "stretch";

type RowGap = "level1" | "level2" | "level3" | "level4" | "level5" | "level6" | "level7" | "level8" | "level9" | "level10" | "const-level1" | "const-level2" | "const-level3" | "const-level4";

type ColumnGap = "level1" | "level2" | "level3" | "level4" | "level5" | "const-level1" | "const-level2" | "const-level3" | "const-level4";

export const Menu: React.FC<MenuProps> = ({ children, direction = "row", align, rowGap = "level1", columnGap = "level1" }) => (
	<nav className="menu">
		<ul
			className={cn("menu__list", {
				[`menu__list--${direction}`]: direction,
				[`menu__list--${align}`]: align,
				[`menu__list--row-gap-${rowGap}`]: rowGap,
				[`menu__list--column-gap-${columnGap}`]: columnGap,
			})}
		>
			{children}
		</ul>
	</nav>
);

type MenuItemProps = {
	children: React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = ({ children }) => <li className="menu__item">{children}</li>;
