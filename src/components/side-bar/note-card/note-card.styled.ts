import styled from "styled-components";

export const CardContainer = styled.li`
	padding: ${({ theme }) => theme.size.m};

	border-top: ${({ theme }) => theme.border.secondaryBorder};
	cursor: pointer;

	:last-child {
		border-bottom: ${({ theme }) => theme.border.secondaryBorder};
	}

	@media (hover: hover) {
		:hover {
			background-color: ${({ theme }) => theme.colors.hoveredCardBgc};
		}
	}

	@media (${({ theme }) => theme.media.maxMobile}) {
		padding: ${({ theme }) => theme.size.s};
	}
`;

export const CardTitle = styled.h2`
	margin-bottom: ${({ theme }) => theme.size.s};

	font-size: ${({ theme }) => theme.fontSize.large};

	color: ${({ theme }) => theme.colors.secondaryChangingColor};

	@media (${({ theme }) => theme.media.maxMobile}) {
		margin-bottom: ${({ theme }) => theme.size.s};
		font-size: ${({ theme }) => theme.fontSize.medium};
	}
`;

export const CardWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.size.m};
`;
