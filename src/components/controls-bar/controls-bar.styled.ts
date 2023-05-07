import styled from "styled-components";

export const ControlsContainer = styled.nav`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.size.m};
`;

export const ControlButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ theme }) => theme.size.xl};
	height: ${({ theme }) => theme.size.xl};

	color: ${({ theme }) => theme.colors.secondaryChangingColor};
	stroke: currentColor;

	transition: ${({ theme }) => theme.animation.primaryTransition};

	:hover {
		transform: scale(1.2);
		border-radius: 6px;
		background-color: ${({ theme }) => theme.colors.primaryChangingBgc};
	}

	:active {
		transform: scale(1);
		transition-duration: 0.2s;
	}
`;
