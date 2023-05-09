import styled from "styled-components";

interface ICardContainer {
	isActive: boolean;
}

export const CardContainer = styled.li<ICardContainer>`
	padding: ${({ theme }) => theme.size.m};

	border-top: ${({ theme }) => theme.border.secondaryBorder};
	cursor: pointer;
	background-color: ${({ theme, isActive }) =>
		isActive ? theme.colors.hoveredCardBgc : "transparent"};

	transition: ${({ theme }) => theme.animation.primaryTransition};

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

export const CardWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.size.m};
`;
