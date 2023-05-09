import { useContext } from "react";
import { formatsDateWithTime, modifyString } from "utils";
import { CardTitle } from "styles/typography";
import { AppContext } from "providers";
import { TypeSetState } from "types/set-state.types";
import { DATE_TYPE } from "types/data.types";

import * as Styled from "./note-card.styled";

interface INoteCard {
	id: string;
	title: string;
	content: string;
	date: string;
	activeId: string;
	setActiveId: TypeSetState<string> | null;
}

export const NoteCard = ({ id, title, content, date, activeId, setActiveId }: INoteCard) => {
	const { setNoteContent } = useContext(AppContext);

	const formatedDate = formatsDateWithTime(DATE_TYPE.SIDE_BAR, date);
	const modifiedTitle = modifyString(title);
	const modifiedContent = modifyString(content);

	const handleClick = () => {
		setNoteContent && setNoteContent({ title, content, date });
		setActiveId && setActiveId(id);
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
