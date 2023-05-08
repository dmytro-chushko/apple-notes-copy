import styled from "styled-components";

export const WindowContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;

	border-radius: 10px;
	overflow: hidden;
`;

export const ContentParagraph = styled.p`
	padding: ${({ theme }) => theme.size.xl};

	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.medium};

	background-color: ${({ theme }) => theme.colors.primaryChangingBgc};

	@media (${({ theme }) => theme.media.maxMobile}) {
		padding: ${({ theme }) => theme.size.l};
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;
	gap: ${({ theme }) => theme.size.l};
	padding: ${({ theme }) => theme.size.l};

	background-color: ${({ theme }) => theme.colors.secondaryChangingBgc};

	@media (${({ theme }) => theme.media.maxMobile}) {
		padding: ${({ theme }) => theme.size.m};
		justify-content: center;
	}
`;

export const ModalButton = styled.button`
	width: 85px;
	padding: ${({ theme }) => theme.size.s};

	font-size: ${({ theme }) => theme.fontSize.medium};

	color: ${({ theme }) => theme.colors.primaryChangingColor};
	background-color: ${({ theme }) => theme.colors.primaryChangingBgc};
	border-radius: 6px;
	outline: none;

	transition: ${({ theme }) => theme.animation.primaryTransition};
	transition-duration: 0.2s;

	@media (hover: hover) {
		:hover {
			background-color: ${({ theme }) => theme.colors.secondaryButtonHover};
		}
	}

	:active {
		background-color: ${({ theme }) => theme.colors.primaryChangingBgc};
	}

	:last-of-type {
		background-color: ${({ theme }) => theme.colors.primaryButtonBgc};
		color: ${({ theme }) => theme.colors.primaryColor};

		@media (hover: hover) {
			:hover {
				background-color: ${({ theme }) => theme.colors.primaryButtonHover};
			}
		}

		:active {
			background-color: ${({ theme }) => theme.colors.primaryButtonBgc};
			outline: ${({ theme }) => theme.outline.primaryButtonOutline};

			transition-duration: 0.1s;
		}
	}
`;
