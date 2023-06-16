import React from "react";
import "./style.scss";
import cn from "classnames";
import { ICalculator } from "./types";
import { Controller } from "react-hook-form";
import IconSwap from "./icon--swap.svg";
import { Box, TextButton, Divider, Button, BlockAlignText, SelectSearch, CurrencyRate, Space, Logo, BodyL, ButtonAdaptiveWidth } from "@matbea/core";
import { useCalculator } from "./hooks";
import { InputExchangeMoney } from "../InputExchangeMoney";

const boxStyles: Record<string, any> = {
	standalone: {
		className: "swap",
		borderRadius: 5,
		bgColor: "tertiary",
		shadow: "tertiary",
		paddingBottom: "level2",
		paddingTop: "level2",
	},
	injected: {},
};

export const Calculator: React.FC<ICalculator> = ({ style, className, referral = {} }) => {
	const { fields, comissionLoading, form, inOptions, outOptions, setLastTouchedInput, isFlipped, lastTouchedInput, flip } = useCalculator();

	const handleCalculatorSubmit = () => {
		const query = new URLSearchParams();
		let cur_to;
		let cur_from;

		if (fields.currencyFrom?.type === "P") {
			cur_from = fields.currencyFrom?.paymentSystem?.bestchangeTickers.deposit[0];
		} else {
			cur_from = fields.currencyFrom?.currency.shortName;
		}

		if (fields.currencyTo?.type === "P") {
			cur_to = fields?.currencyTo.paymentSystem?.bestchangeTickers.deposit[0];
		} else {
			cur_to = fields.currencyTo?.currency.shortName;
		}

		const amount_from = +fields.amountFrom;
		if (amount_from && amount_from > 0) {
			query.set("amountFrom", amount_from.toString());
		}

		const amount_to = +fields.amountTo;
		if (amount_to && amount_to > 0) {
			query.set("amountTo", amount_to.toString());
		}

		query.set("isReverse", (lastTouchedInput === "TO").toString());

		if (cur_to) {
			query.set("cur_to", cur_to);
		}
		if (cur_from) {
			query.set("cur_from", cur_from);
		}
		if (referral.fromPartner) {
			query.set("fromPartner", referral.fromPartner);
		}
		if (referral.utmSource) {
			query.set("utm_source", referral.utmSource);
		}

		window.open("https://matbea.com/swap?" + query);
	};

	return (
		<Box {...boxStyles.standalone} style={style} className={cn("swap", className)}>
			<Space flex direction="column" rowGap="level2">
				<BlockAlignText align="center">
					<Logo size="lg" />
					<BodyL weight="bold">SWAP</BodyL>
					<p>Быстрый обмен криптовалют без регистрации и верификации</p>
				</BlockAlignText>

				{/* <div className="swap__body">
					<Space flex direction="column" rowGap="level1">
						<Space className={cn("swap__group")} flex direction="column" rowGap="const-level3" breakpoints={{ md: { direction: "row" } }}>
							<Space flex className="swap__group-item" direction="column" rowGap="level1">
								<Controller
									control={form.control}
									name="currencyFrom"
									render={({ field }) => {
										return <SelectSearch label={"Отдаете"} options={inOptions} placeholder={"Выберите валюту"} onChange={field.onChange} value={field.value} />;
									}}
								/>

								<Controller
									control={form.control}
									name="amountFrom"
									render={({ field }) => {
										return (
											<Input
												name="amountFrom"
												placeholder={"Введите сумму"}
												type="number"
												autoComplete="off"
												error={form.formState.errors.amountFrom?.message}
												inputMode="numeric"
												disabled={comissionLoading}
												value={field.value}
												onChange={(val) => {
													field.onChange(val);
													setLastTouchedInput("FROM");
												}}
												icon={{
													right: fields.currencyFrom && fields.currencyFrom.currency.linkToIcon && (
														<img src={fields.currencyFrom.currency.linkToIcon} sizes="24" height="24" width={24} alt={fields.currencyFrom.currency.shortName || "icon"} />
													),
												}}
											/>
										);
									}}
								/>
							</Space>

							<Space
								className={cn("swap__button-swap", {
									["swap__button-swap--active"]: isFlipped,
								})}
								flex
								align="center"
								columnGap="const-level2"
								justify="space-between"
							>
								<Divider type="solid" />

								<Button variant="icon-secondary" onClick={flip}>
									<IconSwap className="icon icon--size-base" />
								</Button>

								<Divider type="solid" />
							</Space>

							<Space flex className="swap__group-item" direction="column" rowGap="level1">
								<Controller
									name="currencyTo"
									control={form.control}
									render={({ field }) => {
										return <SelectSearch label={"Получаете"} options={outOptions} placeholder={"Выберите валюту"} onChange={field.onChange} value={field.value} />;
									}}
								/>

								<Controller
									control={form.control}
									name="amountTo"
									render={({ field }) => {
										return (
											<Input
												name="currencyCrypto"
												placeholder={"Введите сумму"}
												type="number"
												error={form.formState.errors.amountTo?.message}
												disabled={comissionLoading}
												autoComplete="off"
												inputMode="numeric"
												value={field.value}
												onChange={(val) => {
													field.onChange(val);
													setLastTouchedInput("TO");
												}}
												icon={{
													right: fields.currencyTo && fields.currencyTo.currency.linkToIcon && (
														<img src={fields.currencyTo.currency.linkToIcon} sizes="24" height="24" width={24} alt={fields.currencyTo.currency.shortName || "icon"} />
													),
												}}
											/>
										);
									}}
								/>
							</Space>
						</Space>
					</Space>
				</div> */}

				<Space flex direction="column" rowGap="level1">
					<Space className={cn("swap__group")} flex direction="column" rowGap="const-level3" breakpoints={{ md: { direction: "row" } }}>
						<Space flex className="swap__group-item" direction="column" rowGap="level1">
							<Controller
								control={form.control}
								name="currencyFrom"
								render={({ field: currencyField }) => {
									return (
										<Controller
											control={form.control}
											name="amountFrom"
											render={({ field: amountField }) => {
												return (
													<InputExchangeMoney
														error={form.formState.errors.amountFrom?.message}
														label="Отдаете"
														placeholder="Сумма"
														name="currencyFrom"
														onChange={currencyField.onChange}
														value={currencyField.value}
														options={inOptions}
														amountValue={amountField.value}
														onAmountChange={(ev) => {
															ev.target.value = ev.target.value.replaceAll(",", ".");
															setLastTouchedInput("FROM");
															amountField.onChange(ev);
														}}
													/>
												);
											}}
										/>
									);
								}}
							/>
						</Space>

						<Space
							className={cn("swap__button-swap", {
								["swap__button-swap--active"]: isFlipped,
							})}
							flex
							align="center"
							columnGap="const-level2"
							justify="space-between"
						>
							<Divider type="solid" />

							<Button variant="icon-tertiary" onClick={flip}>
								<IconSwap className="icon icon--size-base" />
							</Button>

							<Divider type="solid" />
						</Space>

						<Space flex className="swap__group-item" direction="column" rowGap="level1">
							<Controller
								control={form.control}
								name="currencyTo"
								render={({ field: currencyField }) => {
									return (
										<Controller
											control={form.control}
											name="amountTo"
											render={({ field: amountField }) => {
												return (
													<InputExchangeMoney
														error={form.formState.errors.amountTo?.message}
														label="Получаете"
														placeholder="Сумма"
														name="currencyFrom"
														onChange={currencyField.onChange}
														value={currencyField.value}
														options={outOptions}
														amountValue={amountField.value}
														onAmountChange={(ev) => {
															ev.target.value = ev.target.value.replaceAll(",", ".");
															setLastTouchedInput("TO");
															amountField.onChange(ev);
														}}
													/>
												);
											}}
										/>
									);
								}}
							/>
						</Space>
					</Space>
				</Space>

				<Space direction="column" flex rowGap="level1" align="center">
					<ButtonAdaptiveWidth size="full">
						<Button disabled={comissionLoading} onClick={handleCalculatorSubmit}>
							<TextButton weight="bold">Обменять</TextButton>
						</Button>
					</ButtonAdaptiveWidth>

					<Space flex justify="center">
						{fields.amountFrom && fields.amountTo && !comissionLoading && (
							<CurrencyRate
								valueCrypto="1"
								cryptoName={fields.currencyFrom?.currency.shortName || ""}
								valueFiat={(parseFloat(fields.amountTo) / parseFloat(fields.amountFrom)).toFixed(fields.currencyTo?.currency.prec || 8)}
								fiatName={fields.currencyTo?.currency.shortName || ""}
							/>
						)}
					</Space>
				</Space>
			</Space>
		</Box>
	);
};
