import { ReactComponent as Xcircle } from "assets/icons/x-circle.svg";
import { useDebounce } from "hooks/debounce.hook";
import { AppContext } from "providers";
import { useContext, useEffect, useRef, useState } from "react";
import { DATE_TYPE } from "types/data.types";
import { formatsDateWithTime } from "utils";

import * as Styled from "./workspace.styled";

export const Workspace = () => {
  const {
    noteContent,
    setNoteContent,
    isEdit,
    setIsEdit,
    activeId,
    setActiveId,
    handleEdit,
    setIsWorkspaceOpen,
    isWorkspaceOpen,
  } = useContext(AppContext);
  const [titleValue, setTitleValue] = useState<string>(
    noteContent ? noteContent.title : "",
  );
  const [contentValue, setContentValue] = useState<string>(
    noteContent ? noteContent.content : "",
  );
  const editAreaRef = useRef<HTMLDivElement>(null);
  const debouncedTitleValue = useDebounce(titleValue, 500);
  const debouncedContentValue = useDebounce(contentValue, 500);

  const modifiedDate =
    noteContent && formatsDateWithTime(DATE_TYPE.WORKSPACE, noteContent.date);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleValue(e.target.value);

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContentValue(e.target.value);

  const handleCloseMobileWorkspace = () => {
    setIsWorkspaceOpen(false);
    setActiveId("");
  };

  useEffect(() => {
    if (noteContent) {
      setTitleValue(noteContent ? noteContent.title : "");
      setContentValue(noteContent ? noteContent.content : "");
    }
  }, [noteContent]);

  useEffect(() => {
    const handleClickOuteside = (e: Event) => {
      if (
        editAreaRef.current &&
        !editAreaRef.current.contains(e.target as Element) &&
        !(e.target as HTMLElement).dataset.edit
      ) {
        setIsEdit(false);
      }
    };

    document.addEventListener("mousedown", handleClickOuteside);

    return () => {
      document.removeEventListener("mousedown", handleClickOuteside);
    };
  }, []);

  useEffect(() => {
    if (isEdit) {
      const date = new Date();
      setNoteContent({
        title: debouncedTitleValue,
        content: debouncedContentValue,
        date: date.toString(),
      });
      handleEdit({
        id: activeId,
        title: debouncedTitleValue,
        content: debouncedContentValue,
      });
    }
  }, [debouncedTitleValue, debouncedContentValue]);

  return (
    <Styled.WorkspaceContainer isMobileWindowOpen={isWorkspaceOpen}>
      {noteContent && (
        <>
          <Styled.CloseButton
            type="button"
            onClick={handleCloseMobileWorkspace}
          >
            <Xcircle />
          </Styled.CloseButton>
          <Styled.DateContainer>{modifiedDate}</Styled.DateContainer>
          {!isEdit ? (
            <>
              <Styled.NoteTitle>{noteContent.title}</Styled.NoteTitle>
              <Styled.NodeContent>{noteContent.content}</Styled.NodeContent>
            </>
          ) : (
            <Styled.EditArea ref={editAreaRef}>
              <Styled.EditTitleField
                type="text"
                value={titleValue}
                onChange={handleChangeTitle}
                minLength={1}
                maxLength={50}
              />
              <Styled.EditContentField
                value={contentValue}
                onChange={handleChangeContent}
                rows={10}
                minLength={1}
                maxLength={2000}
              />
            </Styled.EditArea>
          )}
        </>
      )}
    </Styled.WorkspaceContainer>
  );
};
