import React from "react";
import "./block-text.scss";

type BlockTextProps = {
	children: React.ReactNode;
};

export const BlockText: React.FC<BlockTextProps> = ({ children }) => <div className="block-text">{children}</div>;
