import { useContext } from "react";
import { AppContext } from "providers";
import { CardTitle } from "styles/typography";
import { formatsDateWithTime } from "utils";
import { DATE_TYPE } from "types/data.types";

import * as Styled from "./workspace.styled";

export const Workspace = () => {
	const { noteContent } = useContext(AppContext);
	const { date, title, content } = noteContent;
	const modifiedDate = formatsDateWithTime(DATE_TYPE.WORKSPACE, date);

	return (
		<Styled.WorkspaceContainer>
			{date && (
				<>
					<Styled.DateContainer>{modifiedDate}</Styled.DateContainer>
					<CardTitle>{title}</CardTitle>
					<p>{content}</p>
				</>
			)}
		</Styled.WorkspaceContainer>
	);
};
