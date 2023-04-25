import React, { useState } from "react";
import { FormInputText } from "../Text/Text";
import cn from "classnames";
import "./text-area.scss";
// import IconDanger from "../../assets/icons/icon--danger.svg";

type TextAreaProps = {
	name: string;
	label: string;
	value?: string;
	cols?: number;
	rows?: number;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	notification?: string;
	required?: boolean;
	error?: string;
	inputMode?: InputMode;
};

type InputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

export const TextArea: React.FC<TextAreaProps> = ({ label, cols, rows, name, value = "", placeholder, onChange, onBlur, notification, required = false, error, inputMode = "none" }) => {
	const [valueInput, setValueInput] = useState(value);

	return (
		<div
			className={cn("text-area", {
				"text-area--error": error,
			})}
		>
			<label htmlFor={name} className="text-area__label">
				<FormInputText>{label}</FormInputText>
			</label>

			<textarea
				id={name}
				value={valueInput}
				name={name}
				className="text-area__area"
				cols={cols}
				rows={rows}
				placeholder={placeholder}
				required={required}
				inputMode={inputMode}
				onChange={(e) => {
					if (onChange) {
						onChange(e);
					}
					setValueInput(e.target.value);
				}}
				onBlur={onBlur}
			/>

			{notification && (
				<div className="text-area__noti">
					<FormInputText tag="span">{notification}</FormInputText>
				</div>
			)}
		</div>
	);
};

type TTextAreaActionsProps = {
	name: string;
	label: string;
	value?: string;
	cols?: number;
	rows?: number;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	required?: boolean;
	error?: string;
	inputMode?: InputMode;
};

export const TextAreaActions: React.FC<TTextAreaActionsProps> = ({ label, cols, rows, name, value = "", placeholder, onChange, required = false, error, inputMode = "none" }) => {
	const [valueInput, setValueInput] = useState(value);
	const [focusTextArea, setfocusTextArea] = useState(false);

	const handleFocusTextArea = () => {
		setfocusTextArea(!focusTextArea);
	};
	const handleBlurTextArea = () => {
		setfocusTextArea(!focusTextArea);
	};

	const isPlacholderTop = focusTextArea || valueInput;

	return (
		<div
			className={cn("text-area", {
				"text-area--error": error,
			})}
		>
			<label htmlFor={name} className="text-area__label visually-hidden">
				<FormInputText>{label}</FormInputText>
			</label>

			<div className="text-area__body">
				<textarea
					id={name}
					value={valueInput}
					name={name}
					className="text-area__area"
					cols={cols}
					rows={rows}
					required={required}
					inputMode={inputMode}
					onChange={(e) => {
						if (onChange) {
							onChange(e);
						}
						setValueInput(e.target.value);
					}}
					onFocus={handleFocusTextArea}
					onBlur={handleBlurTextArea}
				/>
				<div
					className={cn("text-area__custom-placeholder", {
						"text-area__custom-placeholder--focus": isPlacholderTop,
					})}
				>
					<FormInputText tag="span">{placeholder}</FormInputText>
				</div>
				{/*{error && (*/}
				{/*  <div className="text-area__icon">*/}
				{/*    <IconDanger className="icon icon--danger icon--size-sm" />*/}
				{/*  </div>*/}
				{/*)}*/}
			</div>

			{error && (
				<div className="text-area__noti">
					<FormInputText tag="span">{error}</FormInputText>
				</div>
			)}
		</div>
	);
};
