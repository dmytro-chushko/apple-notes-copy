import styled from "styled-components";
import lightThemeIcon from "assets/icons/ligthThemeIcon.svg";
import darkThemeIcon from "assets/icons/darkThemeIcon.svg";

export const LightThemeIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 50%;
	height: 100%;

	background: url(${lightThemeIcon}) no-repeat center;
`;

export const DarkThemeIcon = styled.div`
	position: absolute;
	top: 0;
	right: 0;

	width: 50%;
	height: 100%;

	background: url(${darkThemeIcon}) no-repeat center;
`;

export const SwitcherContainer = styled.label`
	position: relative;

	display: block;
	width: ${({ theme }) => theme.size.themeSwithcerWidth};
	height: ${({ theme }) => theme.size.themeSwitcherHeight};
	padding: 1.5px;

	cursor: pointer;
	border: ${({ theme }) => theme.border.primaryBorder};
	border-radius: 100px;
	background-color: ${({ theme }) => theme.colors.secondaryChangingBgc};

	@media (hover: hover) {
		:hover ${LightThemeIcon} {
			animation: rolling ${({ theme }) => theme.animation.primaryAnimation};
			animation-duration: 3s;

			@keyframes rolling {
				0% {
					transform: rotate(0deg);
				}
				50% {
					transform: rotate(180deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}

		:hover ${DarkThemeIcon} {
			animation: swinging ${({ theme }) => theme.animation.primaryAnimation};
			animation-duration: 3s;

			@keyframes swinging {
				0% {
					transform: rotate(0deg);
				}
				25% {
					transform: rotate(-45deg);
				}
				50% {
					transform: rotate(0deg);
				}
				75% {
					transform: rotate(45deg);
				}
			}
		}
	}

	input {
		display: none;
	}

	@media (${({ theme }) => theme.media.medMobile}) {
		position: fixed;
		top: ${({ theme }) => `calc(${theme.size.xl} + ${theme.size.l})`};
		right: ${({ theme }) => theme.size.s};
	}
`;

interface ISwitcherLever {
	isChecked: boolean;
}

export const SwitcherLever = styled.div<ISwitcherLever>`
	position: relative;

	width: 50%;
	height: 100%;

	border: ${({ theme }) => theme.border.primaryBorder};
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primaryColor};
	transform: ${({ isChecked }) => (isChecked ? "translateX(100%)" : "translateX(0)")};

	transition: ${({ theme }) => theme.animation.primaryTransition};
`;
