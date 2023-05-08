import { TypeSetState } from "types/set-state.types";
import * as Styled from "./content-window.styled";

interface IContentWindow {
	onClose: TypeSetState<boolean>;
}

export const ContentWindow = ({ onClose }: IContentWindow) => {
	const handleClick = () => onClose(false);

	return (
		<Styled.WindowContainer>
			<Styled.ContentParagraph>Are you shure want to delete the note?</Styled.ContentParagraph>
			<Styled.ButtonsWrapper>
				<Styled.ModalButton onClick={handleClick}>Cancel</Styled.ModalButton>
				<Styled.ModalButton>Delete</Styled.ModalButton>
			</Styled.ButtonsWrapper>
		</Styled.WindowContainer>
	);
};
