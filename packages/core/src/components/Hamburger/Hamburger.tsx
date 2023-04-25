import React from "react";
import cn from "classnames";
import "./hamburger.scss";

type HamburgerProps = {
	onClick: () => void;
	active: boolean;
};

export const Hamburger: React.FC<HamburgerProps> = ({ onClick, active }) => {
	return (
		<div className={cn("hamburger", { "hamburger--active": active })} onClick={onClick}>
			<div className="hamburger__body">
				<span className="hamburger__band"></span>
			</div>
		</div>
	);
};
