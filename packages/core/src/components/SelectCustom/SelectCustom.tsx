import React from "react";
import cn from "classnames";
import "./select-custom.scss";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { FormInputText } from "../Text";
// import IconDropdown from "../../assets/icons/icon--dropdown.svg";

type SelectCustomProps = {
	label?: string;
	options: { value: number; label: React.ReactNode }[] | any;
	defaultValue?: React.ReactNode | any;
	placeholder?: string;
	noti?: string;
	onChange?: (e: { value: number; label: React.ReactNode }) => void;
	disabled?: boolean;
	error?: boolean;
};

export const SelectCustom: React.FC<SelectCustomProps> = ({ label, options, defaultValue, placeholder, noti, onChange, disabled, error, ...props }) => (
	<div
		className={cn("select-custom", {
			"select-custom--error": error,
		})}
	>
		{label && (
			<div className="select-custom__label">
				<FormInputText>{label}</FormInputText>
			</div>
		)}

		<Select
			className="select-custom__body"
			options={options}
			value={defaultValue}
			classNamePrefix="select-custom"
			components={{ DropdownIndicator }}
			placeholder={placeholder}
			onChange={onChange}
			isDisabled={disabled}
			{...props}
		/>

		{error && (
			<div className="select-custom__error">
				<FormInputText tag="span">{noti}</FormInputText>
			</div>
		)}
	</div>
);

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => (
	<components.DropdownIndicator {...props}>{/* <IconDropdown className="icon icon--size-xxsm" /> */}</components.DropdownIndicator>
);
