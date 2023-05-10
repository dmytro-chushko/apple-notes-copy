import { useContext } from "react";
import { formatsDateWithTime, modifyString } from "utils";
import { CardTitle } from "styles/typography";
import { AppContext } from "providers";
import { DATE_TYPE } from "types/data.types";

import * as Styled from "./note-card.styled";

interface INoteCard {
	id: string;
	title: string;
	content: string;
	date: string;
}

export const NoteCard = ({ id, title, content, date }: INoteCard) => {
	const { setNoteContent, setActiveId, activeId } = useContext(AppContext);

	const formatedDate = formatsDateWithTime(DATE_TYPE.SIDE_BAR, date);
	const modifiedTitle = title ? modifyString(title) : "";
	const modifiedContent = content ? modifyString(content) : "";

	const handleClick = () => {
		setNoteContent({ title, content, date });
		setActiveId(id);
	};

	return (
		<Styled.CardContainer isActive={activeId === id} onClick={handleClick}>
			<CardTitle>{modifiedTitle}</CardTitle>
			<Styled.CardWrapper>
				<p>{formatedDate}</p>
				<p>{modifiedContent}</p>
			</Styled.CardWrapper>
		</Styled.CardContainer>
	);
};
