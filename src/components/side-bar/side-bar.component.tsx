import { useContext } from "react";
import { AppContext } from "providers";

import * as Styled from "./side-bar.styled";
import { NoteCard } from "./note-card/note-card.component";

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
