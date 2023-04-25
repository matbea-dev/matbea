import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import "./pagination.scss";
// import IconArrowRight from "../../assets/icons/icon--right.svg";
// import IconArrowLeft from "../../assets/icons/icon--left.svg";

type PaginationProps = {
	numOfPages: number;
	currentPage: number;
	onPageChange: (currentPage: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ numOfPages, currentPage, onPageChange }) => {
	const [disableForward, setDisableForward] = useState(false);
	const [disableBack, setDisableBack] = useState(false);
	const [numbersShow, setNumbersShow] = useState<(number | string)[]>([]);

	useEffect(() => {
		if (currentPage === numOfPages) {
			setDisableForward(true);
		} else {
			setDisableForward(false);
		}
		if (currentPage === 1) {
			setDisableBack(true);
		} else {
			setDisableBack(false);
		}
	}, [currentPage, numOfPages]);

	const createPagination = useCallback(() => {
		if (numOfPages <= 5) {
			const result = [];
			for (let i = 1; i <= numOfPages; i++) {
				result.push(i);
			}
			return result;
		}
		const percent33 = numOfPages / 3;
		if (percent33 >= currentPage) return [currentPage, "...", Math.round(numOfPages / 2), "...", numOfPages];
		else if (currentPage < numOfPages - 1) return [1, "...", currentPage, "...", numOfPages];
		else if (currentPage === numOfPages - 1) return [1, "...", currentPage, numOfPages];
		else return [1, "...", Math.round(numOfPages / 2), "...", numOfPages];
	}, [currentPage, numOfPages]);

	useEffect(() => {
		setNumbersShow(createPagination());
	}, [createPagination]);

	return (
		<>
			{numOfPages > 1 && (
				<div className="pagination">
					<button className="pagination__button" type="button" onClick={() => onPageChange(currentPage - 1)} disabled={disableBack}>
						{/* <IconArrowLeft className="icon icon--arrow-left icon--size-xsm" /> */}
					</button>

					{numbersShow.map((num, i) => (
						<PaginationNumber key={`${num}` + i} isCurrent={currentPage === num} count={num === "..." ? undefined : num} onPageChange={onPageChange}>
							{num}
						</PaginationNumber>
					))}

					<button className="pagination__button" type="button" onClick={() => onPageChange(currentPage + 1)} disabled={disableForward}>
						{/* <IconArrowRight className="icon icon--arrow-left icon--size-xsm" /> */}
					</button>
				</div>
			)}
		</>
	);
};

type PaginationNumberProps = {
	isCurrent: boolean;
	children: React.ReactNode;
	onPageChange: (count: number) => void;
	count?: number | string;
};

export const PaginationNumber: React.FC<PaginationNumberProps> = ({ isCurrent = false, children, onPageChange, count }) => {
	const onClick = () => {
		if (count && typeof count === "number") onPageChange(count);
	};
	return (
		<div
			className={cn("pagination__item", {
				"pagination__item--current": isCurrent,
				"pagination__item--test": count,
			})}
			onClick={onClick}
		>
			<span className="pagination__text">{children}</span>
		</div>
	);
};
