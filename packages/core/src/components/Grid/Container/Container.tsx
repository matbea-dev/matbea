import React from "react";
import cn from "classnames";
import "./container.scss";

type ContainerProps = {
	children: React.ReactNode;
	size?: Size;
};

type Size = "fluid" | "md" | "lg" | "xl" | "xxl";

export const Container: React.FC<ContainerProps> = ({ children, size }) => {
	return <div className={cn("container", { [`container--${size}`]: size })}>{children}</div>;
};
