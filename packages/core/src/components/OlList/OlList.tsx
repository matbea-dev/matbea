import React from "react";
import cn from "classnames";
import "./ol-list.scss";

type OlListProps = {
	children: React.ReactNode;
	rowGap?: RowGap;
	sizeText?: SizeText;
	colorText?: Colors;
};

type Colors = "primary" | "secondary" | "third" | "four" | "five" | "danger";

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

type SizeText = "body-xl" | "body-l" | "body-m" | "body-s";

export const OlList: React.FC<OlListProps> = ({ rowGap, sizeText, colorText = "primary", children }) => (
	<ol
		className={cn("ol-list", {
			[`ol-list--gap-${rowGap}`]: rowGap,
			[`ol-list--text-size-${sizeText}`]: sizeText,
			[`ol-list--text-color-${colorText}`]: colorText,
		})}
	>
		{children}
	</ol>
);

type OlListItemProps = {
	children: React.ReactNode;
};

export const OlListItem: React.FC<OlListItemProps> = ({ children }) => (
	<li className="ol-list__item">
		<div className="ol-list__item-body">{children}</div>
	</li>
);
