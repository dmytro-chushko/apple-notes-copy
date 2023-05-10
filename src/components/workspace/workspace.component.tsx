import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "providers";
import { CardTitle } from "styles/typography";
import { formatsDateWithTime } from "utils";
import { DATE_TYPE } from "types/data.types";

import * as Styled from "./workspace.styled";
import { useDebounce } from "hooks/debounce.hook";

export const Workspace = () => {
	const { noteContent, setNoteContent, isEdit, setIsEdit, activeId, handleEdit } =
		useContext(AppContext);
	const [titleValue, setTitleValue] = useState<string>(noteContent ? noteContent.title : "");
	const [contentValue, setContentValue] = useState<string>(noteContent ? noteContent.content : "");
	const editAreaRef = useRef<HTMLDivElement>(null);
	const debouncedTitleValue = useDebounce(titleValue, 500);
	const debouncedContentValue = useDebounce(contentValue, 500);

	const modifiedDate = noteContent && formatsDateWithTime(DATE_TYPE.WORKSPACE, noteContent.date);

	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
		setTitleValue(e.target.value);

	const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setContentValue(e.target.value);

	useEffect(() => {
		if (noteContent) {
			setTitleValue(noteContent ? noteContent.title : "");
			setContentValue(noteContent ? noteContent.content : "");
		}
	}, [noteContent]);

	useEffect(() => {
		const handleClickOuteside = (e: Event) => {
			if (editAreaRef.current && !editAreaRef.current.contains(e.target as Element)) {
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
			handleEdit({ id: activeId, title: debouncedTitleValue, content: debouncedContentValue });
		}
	}, [debouncedTitleValue, debouncedContentValue]);

	return (
		<Styled.WorkspaceContainer>
			{noteContent && (
				<>
					<Styled.DateContainer>{modifiedDate}</Styled.DateContainer>
					{!isEdit ? (
						<>
							<Styled.NoteTitle>{noteContent.title}</Styled.NoteTitle>
							<Styled.NodeContent>{noteContent.content}</Styled.NodeContent>
						</>
					) : (
						<div ref={editAreaRef}>
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
						</div>
					)}
				</>
			)}
		</Styled.WorkspaceContainer>
	);
};
