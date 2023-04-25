import React, { useState } from "react";
import "./checkbox.scss";
import { BodyXl } from "../Text";

type CheckboxProps = {
	name: string;
	value: string;
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	children?: React.ReactNode;
	onChange?: (arg: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ name = " ", value = " ", checked = false, disabled = false, label, children, onChange }) => {
	const [checkboxChecked, setCheckboxChecked] = useState(checked);

	const checkHandler = () => {
		if (onChange) onChange(!checkboxChecked);
		setCheckboxChecked(!checkboxChecked);
	};

	return (
		<div className="checkbox">
			<label className="checkbox__label" htmlFor={name}>
				<input className="checkbox__input" type="checkbox" name={name} id={name} value={value} onChange={checkHandler} checked={checkboxChecked} disabled={disabled} />
				<span className="checkbox__visual"></span>

				{label && (
					<div className="checkbox__content">
						<BodyXl>{label}</BodyXl>
					</div>
				)}
			</label>

			{children}
		</div>
	);
};
