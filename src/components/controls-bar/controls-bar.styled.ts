import styled from "styled-components";

export const ControlsContainer = styled.nav`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.size.m};

	@media (${({ theme }) => theme.media.maxMobile}) {
		gap: ${({ theme }) => theme.size.s};
	}
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

	:disabled {
		color: ${({ theme }) => theme.colors.primaryChangingColor};
		cursor: default;
	}

	@media (hover: hover) {
		:hover:not([disabled]) {
			transform: scale(1.3);
			border-radius: 6px;
			background-color: ${({ theme }) => theme.colors.primaryChangingBgc};
		}
	}

	:active:not([disabled]) {
		transform: scale(1.1);
		transition-duration: 0.2s;
	}
`;
