import { ReactComponent as AddIcon } from "assets/icons/plus.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "assets/icons/edit.svg";

import * as Styled from "./controls-bar.styled";

export const ControlsBar = () => {
	const buttonsEL = [AddIcon, DeleteIcon, EditIcon];

	return (
		<Styled.ControlsContainer>
			{buttonsEL.map((ButtonEl, i) => (
				<Styled.ControlButton key={i}>
					<ButtonEl />
				</Styled.ControlButton>
			))}
		</Styled.ControlsContainer>
	);
};
