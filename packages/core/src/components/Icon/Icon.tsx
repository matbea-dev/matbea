import React from "react";
import cn from "classnames";
import "./icon.scss";

export type IconProps = {
	icons?: React.FC<React.SVGProps<SVGSVGElement>>;
	name?: string;
	size?: Size;
	stroke?: Stroke;
	fill?: Fill;
};

export type Stroke = "primary" | "secondary" | "tertiary" | "fourt" | "success" | "error" | "none";

export type Fill = "primary" | "secondary" | "tertiary" | "fourt" | "success" | "error" | "none";

export type Size = "base" | "xxsm" | "xsm" | "sm" | "md" | "lg" | "xl" | "xxl" | "auto";

export const Icon: React.FC<IconProps> = ({ name, size = "base", stroke = "none", fill = "primary", icons }) => {
	const SVG = icons || "svg";
	return (
		<SVG
			className={cn("icon", name, {
				[`icon--size-${size}`]: size,
				[`icon--stroke-${stroke}`]: stroke,
				[`icon--fill-${fill}`]: fill,
			})}
		/>
	);
};

type IconListnProps = {
	items: {
		icon: React.ReactNode;
		name: string;
	}[];
};

export const IconList: React.FC<IconListnProps> = ({ items = [] }) => {
	return (
		<ul className="icon__list">
			{items.map((item, index) => (
				<li className="icon__list-item" key={index}>
					{item.icon}
					<span className="icon__list-item-name">{item.name}</span>
				</li>
			))}
		</ul>
	);
};
