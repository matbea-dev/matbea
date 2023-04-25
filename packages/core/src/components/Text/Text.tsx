import React from "react";
import cn from "classnames";
import "./text.scss";

type TextUIProps = {
	color?: Colors;
	children: React.ReactNode;
	align?: Align;
	id?: string;
};

type TextIProps = {
	color?: Colors;
	children: React.ReactNode;
	tag?: "div" | "p" | "span";
	weight?: Weight;
	align?: Align;
};

export const H1: React.FC<TextUIProps> = ({ color, children, align, id }) => (
	<Text variant="h1" color={color} tag="H1" weight="extra-bold" align={align} id={id}>
		{children}
	</Text>
);
export const H2: React.FC<TextUIProps> = ({ color, children, align, id }) => (
	<Text variant="h2" color={color} tag="H2" weight="bold" align={align} id={id}>
		{children}
	</Text>
);
export const H3: React.FC<TextUIProps> = ({ color, children, align, id }) => (
	<Text variant="h3" color={color} tag="H3" weight="bold" align={align} id={id}>
		{children}
	</Text>
);
export const H4: React.FC<TextUIProps> = ({ color, children, align, id }) => (
	<Text variant="h4" color={color} tag="H4" weight="bold" align={align} id={id}>
		{children}
	</Text>
);
export const H5: React.FC<TextIProps> = ({ color, children, align, tag }) => (
	<Text variant="h5" color={color} tag={tag} weight="semibold" align={align}>
		{children}
	</Text>
);
export const BodyXl: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="body-xl" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const BodyL: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="body-l" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const BodyM: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="body-m" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const BodyS: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="body-s" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const TextButton: React.FC<TextIProps> = ({ color, children, tag, weight = "bold", align }) => (
	<Text variant="button" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const FormInputText: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="form-input-text" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const FormPlaceholder: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="form-placeholder" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const ModalTitle: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="modal-title" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const PageError: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="page-error" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const TextPagination: React.FC<TextIProps> = ({ color, children, tag, weight = "bold", align }) => (
	<Text variant="pagination" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const SliderUrl: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="slider-url" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const UrlsMenu: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="urls-menu" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const SliderHeadline: React.FC<TextIProps> = ({ color, children, tag, weight = "extra-bold", align }) => (
	<Text variant="slider-headline" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const TextAvatar: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="avatar-basic" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const TextAvatarM: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="avatar-m" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);
export const TextAvatarS: React.FC<TextIProps> = ({ color, children, tag, weight, align }) => (
	<Text variant="avatar-s" color={color} tag={tag} weight={weight} align={align}>
		{children}
	</Text>
);

type TextProps = {
	variant?: Variant;
	color?: Colors;
	children: React.ReactNode;
	tag?: Tag;
	weight?: Weight;
	align?: Align;
	id?: string;
};

type Tag = "H1" | "H2" | "H3" | "H4" | "H5" | "div" | "p" | "span";

type Weight = "regular" | "semibold" | "medium" | "bold" | "extra-bold";

type Variant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "body-xl"
	| "body-l"
	| "body-m"
	| "body-s"
	| "button"
	| "form-input-text"
	| "form-placeholder"
	| "page-error"
	| "modal-title"
	| "pagination"
	| "slider-url"
	| "urls-menu"
	| "slider-headline"
	| "avatar-basic"
	| "avatar-m"
	| "avatar-s";

type Colors = "primary" | "secondary" | "third" | "four" | "five" | "six" | "danger";

type Align = "left" | "center" | "right";

const Text: React.FC<TextProps> = ({ variant, color = "primary", tag = "p", children, weight = "regular", align, id }) => (
	<>
		{tag === "H1" && (
			<h1
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</h1>
		)}
		{tag === "H2" && (
			<h2
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</h2>
		)}
		{tag === "H3" && (
			<h3
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</h3>
		)}
		{tag === "H4" && (
			<h4
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</h4>
		)}
		{tag === "H5" && (
			<h5
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</h5>
		)}
		{tag === "div" && (
			<div
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</div>
		)}
		{tag === "p" && (
			<p
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</p>
		)}
		{tag === "span" && (
			<span
				className={cn("text", {
					[`text--size-${variant}`]: variant,
					[`text--color-${color}`]: color,
					[`text--weight-${weight}`]: weight,
					[`text--align-${align}`]: align,
				})}
				id={id}
			>
				{children}
			</span>
		)}
	</>
);
