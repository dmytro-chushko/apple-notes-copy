import { formatsDateWithTime } from "utils/formatsDateWithTime";
import * as Styled from "./note-card.styled";

interface INoteCard {
	title: string;
	content: string;
	date: string;
}

export const NoteCard = ({ title, content, date }: INoteCard) => {
	const formatedDate = formatsDateWithTime(date);

	return (
		<Styled.CardContainer>
			<Styled.CardTitle>{title}</Styled.CardTitle>
			<Styled.CardWrapper>
				<p>{formatedDate}</p>
				<p>{content}</p>
			</Styled.CardWrapper>
		</Styled.CardContainer>
	);
};
