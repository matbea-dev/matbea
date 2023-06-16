import React from "react";
import cn from "classnames";
import "./currency-name.scss";
import { Space } from "../Space";
import { BodyL, BodyM, FormInputText } from "../Text";
import { ImgWrapper } from "../ImgWrapper";

type CurrencyNameProps = {
	icon?: React.ReactNode;
	iconSize?: IconSize;
	name?: string;
	short?: string;
	variant?: Variant;
};

type Variant = "basic" | "secondary" | "third";

type IconSize = "base" | "xxsm" | "xsm" | "sm" | "md" | "lg" | "xl" | "xxl" | "auto";

export const CurrencyName: React.FC<CurrencyNameProps> = ({ icon, iconSize = "base", name, short, variant = "basic" }) => (
	<>
		{variant == "basic" && (
			<div
				className={cn("currency-name", {
					[`currency-name--icon-size-${iconSize}`]: iconSize,
				})}
			>
				<Space direction="row" columnGap="const-level1" align="center">
					{icon && <ImgWrapper>{icon}</ImgWrapper>}

					{name && <BodyL weight="bold">{name}</BodyL>}

					{short && <BodyL color="secondary">{short}</BodyL>}
				</Space>
			</div>
		)}

		{variant == "secondary" && (
			<div
				className={cn("currency-name", {
					[`currency-name--icon-size-${iconSize}`]: iconSize,
				})}
			>
				<Space direction="row" columnGap="const-level1" align="center">
					{icon && <ImgWrapper>{icon}</ImgWrapper>}

					{name && <BodyM weight="bold">{name}</BodyM>}

					{short && <BodyM color="secondary">{short}</BodyM>}
				</Space>
			</div>
		)}

		{variant == "third" && (
			<div
				className={cn("currency-name", {
					[`currency-name--icon-size-${iconSize}`]: iconSize,
				})}
			>
				<Space direction="row" columnGap="const-level1" align="center">
					{icon && <ImgWrapper>{icon}</ImgWrapper>}

					{name && <FormInputText weight="bold">{name}</FormInputText>}

					{short && <FormInputText color="secondary">{short}</FormInputText>}
				</Space>
			</div>
		)}
	</>
);
