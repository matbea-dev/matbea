import React from "react";

type HtmlContentProps = {
	content: string;
};

export const HtmlContent: React.FC<HtmlContentProps> = ({ content }) => {
	return <div className="html-content" dangerouslySetInnerHTML={{ __html: content || "" }}></div>;
};
