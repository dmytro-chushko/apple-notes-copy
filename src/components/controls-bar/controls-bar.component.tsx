import { useContext, useState } from "react";
import { AppContext } from "providers";
import { ModalWindow } from "components/modal-window";
import { ReactComponent as AddIcon } from "assets/icons/plus.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "assets/icons/edit.svg";

import * as Styled from "./controls-bar.styled";

export const ControlsBar = () => {
	const { activeId } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const buttonsEL = [AddIcon, DeleteIcon, EditIcon];

	const setHandler = (element: React.FunctionComponent) => {
		switch (element) {
			case AddIcon:
				return () => console.log("add");
			case DeleteIcon:
				return () => setIsOpen(true);
			case EditIcon:
				return () => console.log("edit");
			default:
				return;
		}
	};

	return (
		<>
			<Styled.ControlsContainer>
				{buttonsEL.map((ButtonEl, i) => {
					return (
						<Styled.ControlButton
							key={i}
							onClick={setHandler(ButtonEl)}
							disabled={i !== 0 && !activeId}
						>
							<ButtonEl />
						</Styled.ControlButton>
					);
				})}
			</Styled.ControlsContainer>
			<ModalWindow isOpen={isOpen} onClose={setIsOpen} />
		</>
	);
};
