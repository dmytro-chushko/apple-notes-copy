import { useContext } from "react";
import { AppContext } from "providers";
import { NoteCard } from "./note-card/note-card.component";

import * as Styled from "./side-bar.styled";

export const SideBar = () => {
	const { notesList, setIsWorkspaceOpen } = useContext(AppContext);

	const handleClick = () => setIsWorkspaceOpen(true);

	return (
		<Styled.SideBarContainer onClick={handleClick}>
			<ul>
				{notesList &&
					notesList.map(({ id, values: { title, content, date } }) => (
						<NoteCard key={id} id={id} title={title} content={content} date={date} />
					))}
			</ul>
		</Styled.SideBarContainer>
	);
};
