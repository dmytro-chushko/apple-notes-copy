import { AppContext } from "providers";
import { useContext } from "react";
import { NoteCard } from "./note-card/note-card.component";

import * as Styled from "./side-bar.styled";

export const SideBar = () => {
  const { notesList, setIsWorkspaceOpen } = useContext(AppContext);

  const sortedList =
    notesList &&
    notesList.sort((prev, next) =>
      next.updated_at.localeCompare(prev.updated_at),
    );

  const handleClick = () => setIsWorkspaceOpen(true);

  return (
    <Styled.SideBarContainer onClick={handleClick}>
      <ul>
        {sortedList &&
          sortedList.map(({ id, values: { title, content, date } }) => (
            <NoteCard
              key={id}
              id={id}
              title={title}
              content={content}
              date={date}
            />
          ))}
      </ul>
    </Styled.SideBarContainer>
  );
};
