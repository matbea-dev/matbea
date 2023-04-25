import React from "react";
import cn from "classnames";
import "./divider.scss";

type DividerProps = {
	type: Type;
};

type Type = "solid";

export const Divider: React.FC<DividerProps> = ({ type = "solid" }) => <div className={cn("divider", { [`divider--type-${type}`]: type })}></div>;
