import React from "react";
import cn from "classnames";

type ButtonLinkProps = {
	children?: React.ReactNode;
	variant?: Variant;
	size?: Size;
	width?: Width;
	target?: "_blank";
	url?: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ children, size, variant, width, target, url }) => (
	<Buttons size={size} type="link" variant={variant} width={width} target={target} url={url}>
		{children}
	</Buttons>
);

type ButtonProps = {
	children?: React.ReactNode;
	variant?: Variant;
	size?: Size;
	width?: Width;
	disabled?: boolean;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({ children, type = "button", size, disabled, onClick, variant, width }) => (
	<Buttons size={size} type={type} disabled={disabled} onClick={onClick} variant={variant} width={width}>
		{children}
	</Buttons>
);

type ButtonsProps = {
	children?: React.ReactNode;
	variant?: Variant;
	size?: Size;
	type?: "button" | "submit" | "reset" | "link";
	disabled?: boolean;
	onClick?: () => void;
	url?: string;
	target?: "_blank";
	width?: Width;
};

export type Size = "large" | "medium" | "small";

export type Width = "full" | "auto";

export type Variant = "primary" | "secondary" | "tertiary" | "fourth" | "fifth" | "sixth" | "circle" | "warning" | "flat" | "vote" | "only-icon" | "icon" | "icon-secondary" | "icon-tertiary";

export const Buttons: React.FC<ButtonsProps> = ({ children, size, onClick, variant, type = "button", url = "#", target, disabled = false, width, ...props }) => (
	<>
		{type === "button" && (
			<button
				className={cn("btn", {
					[`btn--${size}`]: size,
					[`btn--${variant}`]: variant,
					[`btn--${width}`]: width,
				})}
				onClick={onClick}
				type={type}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		)}

		{type === "submit" && (
			<button
				className={cn("btn", {
					[`btn--${size}`]: size,
					[`btn--${variant}`]: variant,
					[`btn--${width}`]: width,
				})}
				onClick={onClick}
				type={type}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		)}

		{type === "link" && (
			<a
				href={url}
				className={cn("btn", {
					[`btn--${size}`]: size,
					[`btn--${variant}`]: variant,
					[`btn--${width}`]: width,
				})}
				role="button"
				target={target}
				{...props}
			>
				{children}
			</a>
		)}
	</>
);
