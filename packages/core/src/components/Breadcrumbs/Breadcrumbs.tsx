import React from "react";
import "./breadcrumbs.scss";
import { Space } from "../Space";
import { LinkExtern } from "../LinkExtern";
import { BodyM } from "../Text";
// import IconArrowRightThin from "../../assets/icons/icon--right.svg";
// import IconHous from "../../assets/icons/icon--home.svg";

type BreadcrumbsProps = {
	breadcrumbs: {
		link?: {
			href: string;
			text: string;
		};
		text?: string;
	}[];
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs = [] }) => {
	return (
		<div className={`breadcrumbs`}>
			<ul className="breadcrumbs__list">
				{breadcrumbs.map((item, index) => (
					<li className="breadcrumbs__item" key={index}>
						<Space direction="row" columnGap="level2" align="center">
							{/* {index == 0 ? <IconHous className="icon icon--home icon--size-sm icon--fill-primary" /> : <IconArrowRightThin className="icon icon--arrow-right icon--size-xsm icon--fill-tertiary" />} */}

							{item.link && (
								<LinkExtern href={item.link.href}>
									<BodyM tag="span">{item.link.text}</BodyM>
								</LinkExtern>
							)}
							{item.text && <BodyM tag="span">{item.text}</BodyM>}
						</Space>
					</li>
				))}
			</ul>
		</div>
	);
};
