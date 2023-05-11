import styled from "styled-components";
import { CardTitle } from "styles/typography";

interface IWorkspaceContainer {
	isMobileWindowOpen: boolean;
}

export const WorkspaceContainer = styled.section<IWorkspaceContainer>`
	display: flex;
	flex-direction: column;
	padding: ${({ theme }) => theme.size.m};
	flex-grow: 1;

	@media (${({ theme }) => theme.media.maxMobile}) {
		position: fixed;
		top: 44px;
		right: 0;

		width: 100%;
		height: calc(100% - 44px);

		background-color: ${({ theme }) => theme.colors.primaryChangingBgc};
		transform: ${({ isMobileWindowOpen }) =>
			isMobileWindowOpen ? "translateX(0)" : "translateX(100%)"};

		transition: ${({ theme }) => theme.animation.primaryTransition};
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: ${({ theme }) => theme.size.s};
	left: ${({ theme }) => theme.size.s};

	width: 36px;
	height: 36px;

	color: ${({ theme }) => theme.colors.primaryChangingColor};
	stroke: currentColor;
	background-color: ${({ theme }) => theme.colors.hoveredCardBgc};
	border-radius: ${({ theme }) => theme.borderRadius.decorative};

	@media (${({ theme }) => theme.media.minTablet}) {
		display: none;
	}
`;

export const DateContainer = styled.div`
	margin-bottom: ${({ theme }) => theme.size.s};

	text-align: center;

	@media (${({ theme }) => theme.media.maxMobile}) {
		margin-bottom: ${({ theme }) => theme.size.l};
	}
`;

export const EditArea = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
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
	flex-grow: 1;

	color: ${({ theme }) => theme.colors.primaryChangingColor};
	background-color: ${({ theme }) => theme.colors.hoveredCardBgc};
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius.fields};
	resize: none;
`;
