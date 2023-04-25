import React from "react";
import cn from "classnames";

type LinkExternProps = {
	href: string;
	children: React.ReactNode;
	type?: Type;
	target?: "_blank";
	color?: Color;
};

type Type = "mailto" | "tel" | "href";

type Color = "primary" | "secondary" | "tertiary" | "fourt" | "opacity";

export const LinkExtern: React.FC<LinkExternProps> = ({ href, children, type = "href", target, color = "primary" }) => (
	<>
		{type === "href" && (
			<a href={href} className={cn("link-extern", { [`link-extern--${color}`]: color })} target={target} rel={target ? "noopener noreferrer" : ""}>
				{children}
			</a>
		)}

		{type === "tel" && (
			<a href={`${type}:${href}`} className={cn("link-extern", { [`link-extern--${color}`]: color })}>
				{children}
			</a>
		)}

		{type === "mailto" && (
			<a href={`${type}:${href}`} className={cn("link-extern", { [`link-extern--${color}`]: color })}>
				{children}
			</a>
		)}
	</>
);
