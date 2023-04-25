import React from "react";
import cn from "classnames";
import "./vertical-offset.scss";

type VerticalOffsetProps = {
	offset?: OffsetSize;
	variant?: "row-gap" | "margin";
	children?: React.ReactNode;
};

type OffsetSize =
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
	| "constancy-level1"
	| "constancy-level2"
	| "constancy-level3"
	| "constancy-level4"
	| "constancy-level5";

export const VerticalOffset: React.FC<VerticalOffsetProps> = ({ offset, children, variant = "row-gap" }) => {
	return (
		<>
			{variant === "row-gap" && (
				<div
					className={cn("vertical-offset", {
						[`vertical-offset--${offset}`]: offset,
					})}
				>
					{children}
				</div>
			)}

			{variant === "margin" && (
				<div
					className={cn("vertical-offset-margin", {
						[`vertical-offset-margin--${offset}`]: offset,
					})}
				>
					{children}
				</div>
			)}
		</>
	);
};
