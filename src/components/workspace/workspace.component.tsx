import { useContext } from "react";
import { AppContext } from "providers";
import { CardTitle } from "styles/typography";
import { formatsDateWithTime } from "utils";
import { DATE_TYPE } from "types/data.types";

import * as Styled from "./workspace.styled";

export const Workspace = () => {
	const { noteContent } = useContext(AppContext);
	const modifiedDate = noteContent && formatsDateWithTime(DATE_TYPE.WORKSPACE, noteContent.date);

	return (
		<Styled.WorkspaceContainer>
			{noteContent && (
				<>
					<Styled.DateContainer>{modifiedDate}</Styled.DateContainer>
					<CardTitle>{noteContent.title}</CardTitle>
					<p>{noteContent.content}</p>
				</>
			)}
		</Styled.WorkspaceContainer>
	);
};
