import { useContext } from "react";
import { TypeSetState } from "types/set-state.types";
import { AppContext } from "providers";

import * as Styled from "./content-window.styled";

interface IContentWindow {
	onClose: TypeSetState<boolean>;
}

export const ContentWindow = ({ onClose }: IContentWindow) => {
	const { handleDelete } = useContext(AppContext);

	const handleCancelClick = () => onClose(false);

	const handleDeleteClick = () => {
		onClose(false);
		handleDelete();
	};

	return (
		<Styled.WindowContainer>
			<Styled.ContentParagraph>Are you shure want to delete the note?</Styled.ContentParagraph>
			<Styled.ButtonsWrapper>
				<Styled.ModalButton onClick={handleCancelClick}>Cancel</Styled.ModalButton>
				<Styled.ModalButton onClick={handleDeleteClick}>Delete</Styled.ModalButton>
			</Styled.ButtonsWrapper>
		</Styled.WindowContainer>
	);
};
