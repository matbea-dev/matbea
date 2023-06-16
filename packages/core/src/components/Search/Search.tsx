import React from "react";
import "./search.scss";
import { Input } from "../Input";
import { Button } from "../Button";
import IconSearch from "../../assets/icons/icon--search.svg";

type SearchProps = {
	placeholder: string;
	value?: string;
	onClick: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<SearchProps> = ({ placeholder, value, onClick, onChange }) => (
	<div className="search">
		<Input
			name="search"
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			type="text"
			icon={{
				left: (
					<Button variant="icon" onClick={onClick}>
						<IconSearch className="icon icon--size-base" />
					</Button>
				),
			}}
		/>
	</div>
);
