import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";

import * as Styled from "./modal-window.styled";
import { TypeSetState } from "types/set-state.types";

interface IModalWindow {
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen: TypeSetState<boolean>;
}

const modalRootElement = document.querySelector("#modal");

export const ModalWindow = ({ children, isOpen, setIsOpen }: IModalWindow) => {
	const element = useMemo(() => document.createElement("div"), []);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLDivElement).dataset.backdrop) setIsOpen(false);
	};

	useEffect(() => {
		modalRootElement?.appendChild(element);

		return () => {
			modalRootElement?.removeChild(element);
		};
	}, [element]);

	return createPortal(
		<Styled.Backdrop isOpen={isOpen} onClick={handleClick} data-backdrop={true}>
			{children}
		</Styled.Backdrop>,
		element,
	);
};
