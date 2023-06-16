import React, { useState } from "react";
import cn from "classnames";
import "./input.scss";
import { PatternFormat } from "react-number-format";
import { FormInputText } from "../Text";

type InputProps = {
	variant?: Variant;
	name: string;
	type: InputType;
	value?: any;
	placeholder?: string;
	disabled?: boolean;
	label?: {
		left?: string;
		right?: React.ReactNode;
	};
	error?: string;
	maxLength?: number;
	icon?: {
		left?: React.ReactNode;
		right?: React.ReactNode;
	};
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	autoComplete?: "on" | "off";
	inputMode?: InputMode;
	format?: string;
};

type Variant = "without";

type InputType = "text" | "tel" | "number" | "email" | "password";

type InputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

export const Input: React.FC<InputProps> = ({
	variant,
	name,
	type = "text",
	value = "",
	placeholder = "Поле ввода",
	disabled = false,
	label,
	error = false,
	maxLength,
	icon,
	onChange,
	onBlur,
	required,
	inputMode = "text" as InputMode,
	autoComplete = "off",
	format,
}) => (
	<div
		className={cn("input", {
			"input--error": error,
			[`input--${variant}`]: variant,
		})}
	>
		{label && (
			<label htmlFor={name} className="input__label">
				<FormInputText>{label?.left}</FormInputText>
				{label?.right}
			</label>
		)}

		<div className={cn("input__body", { "input__body--disabled": disabled })} tabIndex={1}>
			{icon?.left && <div className="input__icon">{icon.left}</div>}

			{format && (
				<PatternFormat
					format={format}
					className="input__input"
					name={name}
					id={name}
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					maxLength={maxLength}
					onChange={onChange}
					required={required}
					inputMode={inputMode}
					autoComplete={autoComplete}
					onBlur={onBlur}
				/>
			)}

			{!format && (
				<input
					className="input__input"
					type={type}
					name={name}
					id={name}
					value={value}
					placeholder={placeholder}
					disabled={disabled}
					maxLength={maxLength}
					onChange={onChange}
					required={required}
					inputMode={inputMode}
					autoComplete={autoComplete}
					onBlur={onBlur}
				/>
			)}

			{icon?.right && <div className="input__icon">{icon.right}</div>}
		</div>

		{error && (
			<div className="input__error">
				<FormInputText tag="span">{error}</FormInputText>
			</div>
		)}
	</div>
);

export const InputActions: React.FC<InputProps> = ({
	variant,
	name,
	type = "text",
	value = "",
	placeholder = "Поле ввода",
	disabled = false,
	label,
	error = false,
	maxLength,
	icon,
	onChange,
	required,
	autoComplete = "off",
	inputMode = "text" as InputMode,
}) => {
	const [valueInput, setValueInput] = useState<string>(value);
	const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e);
		}
		setValueInput(e.target.value);
	};
	const [focusPlaceholder, setFocusPlaceholder] = useState(false);

	const handleFocusPlaceholder = () => {
		setFocusPlaceholder(!focusPlaceholder);
	};
	const handleBlurPlaceholder = () => {
		setFocusPlaceholder(!focusPlaceholder);
	};

	const isPlacholderTop = focusPlaceholder || valueInput;

	return (
		<div
			className={cn("input", {
				"input--error": error,
				[`input--${variant}`]: variant,
				"input--icon-left": icon?.left,
			})}
		>
			{label && (
				<label htmlFor={name} className="input__label">
					<FormInputText>{label?.left}</FormInputText>
					{label?.right}
				</label>
			)}

			<div className={cn("input__body", { "input__body--disabled": disabled })} tabIndex={1} onFocus={handleFocusPlaceholder} onBlur={handleBlurPlaceholder}>
				{icon?.left && <div className="input__icon">{icon.left}</div>}

				<input
					className="input__input"
					type={type}
					name={name}
					id={name}
					value={valueInput}
					disabled={disabled}
					maxLength={maxLength}
					onChange={changeInputHandler}
					required={required}
					autoComplete={autoComplete}
					inputMode={inputMode}
				/>
				<div
					className={cn("input__placeholder", {
						"input__placeholder--focus": isPlacholderTop,
					})}
				>
					<FormInputText tag="span">{placeholder}</FormInputText>
				</div>

				{icon?.right && <div className="input__icon">{icon.right}</div>}
			</div>

			{error && (
				<div className="input__error">
					<FormInputText tag="span">{error}</FormInputText>
				</div>
			)}
		</div>
	);
};
