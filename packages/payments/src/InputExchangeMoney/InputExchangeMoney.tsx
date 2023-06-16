/* eslint-disable prettier/prettier */
import React, { MouseEventHandler, useEffect, useMemo, useRef, useState } from "react";
import cn from "classnames";
import "./input-exchange-money.scss";
import { IOption } from "@matbea/api";
import { FormInputText, Space, Button, CurrencyName, Search } from "@matbea/core";
import IconDropdown from "@matbea/core/dist/esm/assets/icons/icon--dropdown.svg";
import IconNoIcon from "@matbea/core/dist/esm/assets/imgs/icon--no-icon.svg";

export interface IInputExchangeMoney {
	name: string;
	label: string;
	options: IOption[];
	value?: IOption | null;
	amountValue: string;
	placeholder?: string;
	disabled?: boolean;
	error?: string;
	maxLength?: number;
	required?: boolean;
	autoComplete?: "on" | "off";
	inputMode?: InputExchangeMoneyInputMode;
	onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onAmountBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChange: (value: IOption) => void;
}

type InputExchangeMoneyInputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

export const InputExchangeMoney: React.FC<IInputExchangeMoney> = ({
	name,
	label,
	options,
	value,
	amountValue,
	placeholder,
	disabled,
	error,
	maxLength,
	required,
	autoComplete,
	inputMode = "numeric" as InputExchangeMoneyInputMode,
	onAmountChange,
	onAmountBlur,
	onChange,
}) => {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const openRef = useRef(false);
	const [search, setSearch] = useState("");

	openRef.current = open;

	const handlerOpenDropdown = () => {
		setOpen((state) => !state);
	};

	useEffect(() => {
		const handler = (ev: Event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(ev.target as Node) && openRef.current) {
				setOpen(false);
			}
		};

		window.addEventListener("click", handler, true);

		return () => {
			window.removeEventListener("click", handler);
		};
	}, []);

	const filteredOptions = useMemo(() => {
		const lowerSearch = search.toLowerCase();
		return options.filter((option) => {
			if (option.currency.shortName.toLowerCase().includes(lowerSearch)) {
				return true;
			}

			if (option.currency.name.toLowerCase().includes(lowerSearch)) {
				return true;
			}

			if (option.paymentSystem?.name.toLowerCase().includes(lowerSearch)) {
				return true;
			}

			return false;
		});
	}, [search, options]);

	return (
		<div
			className={cn("input-exchange-money", {
				"input-exchange-money--error": error,
			})}
		>
			<label htmlFor={name} className="input-exchange-money__label">
				<FormInputText>{label}</FormInputText>
			</label>

			<Space
				flex
				align="center"
				columnGap="const-level1"
				className={cn("input-exchange-money__body", {
					"input-exchange-money__body--desabled": disabled,
				})}
				tabIndex={1}
			>
				<Button variant="flat" onClick={handlerOpenDropdown as any}>
					<Space columnGap="const-level1" align="center">
						<CurrencyName
							variant="third"
							name={value?.type === "C" ? value?.currency.name : value?.paymentSystem?.name}
							icon={
								<>
									{value?.currency.linkToIcon || value?.paymentSystem?.iconMini ? (
										<img src={value?.paymentSystem?.iconMini || value.currency.linkToIcon} alt={value?.currency.name || ""} width={24} height={24} />
									) : (
										<IconNoIcon className="icon icon--size-base" />
									)}
								</>
							}
						/>

						<IconDropdown className="icon icon--size-xxsm icon--fill-secondary" />
					</Space>
				</Button>

				<input
					className="input-exchange-money__input"
					name={name}
					id={name}
					value={amountValue}
					placeholder={placeholder}
					disabled={disabled}
					maxLength={maxLength}
					onChange={onAmountChange}
					required={required}
					inputMode={inputMode}
					autoComplete={autoComplete}
					onBlur={onAmountBlur}
				/>

				<FormInputText color="secondary">{value?.currency.shortName}</FormInputText>
			</Space>

			{error && (
				<div className="input-exchange-money__error">
					<FormInputText tag="span">{error}</FormInputText>
				</div>
			)}

			<Space
				flex
				direction="column"
				rowGap="level1"
				className={cn("input-exchange-money__dropdown", {
					"input-exchange-money__dropdown--open": open,
				})}
				ref={dropdownRef}
			>
				<div className="input-exchange-money__dropdown-search">
					<Search placeholder="Поиск" onChange={(e) => setSearch(e.target.value)} onClick={() => {}} value={search} />
				</div>

				<Space flex direction="column" className="input-exchange-money__dropdown-list">
					{filteredOptions.map((option, index) => {
						return (
							<div
								className="input-exchange-money__dropdown-list-item"
								key={index}
								onClick={() => {
									onChange(option);
									setOpen(false);
								}}
							>
								<CurrencyName
									variant="secondary"
									name={option?.type === "C" ? option?.currency.name : option?.paymentSystem?.name}
									icon={
										<>
											{option?.currency.linkToIcon || option?.paymentSystem?.iconMini ? (
												<img src={option.paymentSystem?.iconMini || option.currency.linkToIcon} alt={option.currency.name} width={24} height={24} />
											) : (
												<IconNoIcon className="icon icon--size-base" />
											)}
										</>
									}
								/>
							</div>
						);
					})}
				</Space>
			</Space>
		</div>
	);
};
