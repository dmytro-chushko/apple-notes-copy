import styled from "styled-components";
import { CardTitle } from "styles/typography";

export const WorkspaceContainer = styled.section`
	padding: ${({ theme }) => theme.size.m};
	flex-grow: 1;
`;

export const DateContainer = styled.div`
	margin-bottom: ${({ theme }) => theme.size.s};

	text-align: center;
`;

export const NoteTitle = styled(CardTitle)`
	padding: ${({ theme }) => theme.size.s};
`;

export const NodeContent = styled.p`
	padding: ${({ theme }) => theme.size.s};
`;

export const EditTitleField = styled.input`
	display: block;
	width: 100%;
	margin-bottom: ${({ theme }) => theme.size.s};
	padding: ${({ theme }) => theme.size.s};

	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.bold};

	color: ${({ theme }) => theme.colors.secondaryChangingColor};
	background-color: ${({ theme }) => theme.colors.hoveredCardBgc};
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius.fields};

	@media (${({ theme }) => theme.media.maxMobile}) {
		font-size: ${({ theme }) => theme.fontSize.medium};
	}
`;

export const EditContentField = styled.textarea`
	display: block;
	width: 100%;
	padding: ${({ theme }) => theme.size.s};

	color: ${({ theme }) => theme.colors.primaryChangingColor};
	background-color: ${({ theme }) => theme.colors.hoveredCardBgc};
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius.fields};
	resize: none;
`;
