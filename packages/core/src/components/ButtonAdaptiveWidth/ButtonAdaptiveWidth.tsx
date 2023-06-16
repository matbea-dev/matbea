import React from "react";
import cn from "classnames";
import "./button-adaptive-width.scss";

type ButtonAdaptiveWidthProps = {
	children: React.ReactNode;
	size?: Size;
	breakpoints?: {
		md?: ButtonAdaptiveWidthTypes;
		lg?: ButtonAdaptiveWidthTypes;
		xl?: ButtonAdaptiveWidthTypes;
		xxl?: ButtonAdaptiveWidthTypes;
	};
};

type ButtonAdaptiveWidthTypes = {
	size?: Size;
};

type Size = "auto" | "full";

export const ButtonAdaptiveWidth: React.FC<ButtonAdaptiveWidthProps> = ({ children, size, breakpoints }) => {
	let breakpointsValue = "";

	breakpoints &&
		Object.keys(breakpoints).forEach((key) => {
			const isKeyCorrected = key === "md" || key === "lg" || key === "xl" || key === "xxl";

			if (isKeyCorrected && breakpoints[key]?.size) {
				breakpointsValue += `button-adaptive-width--${key}-size-${breakpoints[key]?.size} `;
			}
		});

	return (
		<div
			className={cn(
				"button-adaptive-width",
				{
					[`button-adaptive-width--size-${size}`]: size,
				},
				breakpointsValue
			)}
		>
			{children}
		</div>
	);
};
