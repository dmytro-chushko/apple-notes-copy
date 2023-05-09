import styled from "styled-components";

export const WorkspaceContainer = styled.section`
	padding: ${({ theme }) => theme.size.m};
	flex-grow: 1;
`;

export const DateContainer = styled.div`
	margin-bottom: ${({ theme }) => theme.size.s};

	text-align: center;
`;
