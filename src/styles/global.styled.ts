import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}; 
  ${css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		html {
			font-size: ${({ theme }) => theme.fontSize.base};
		}

		body {
			font-family: DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
				"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
			font-size: ${({ theme }) => theme.fontSize.regular};

			color: ${({ theme }) => theme.colors.primaryChangingColor};
			background-color: ${({ theme }) => theme.colors.primaryChangingBgc};
			overflow: hidden;

			transition: ${({ theme }) => theme.animation.primaryTransition};

			@media (${({ theme }) => theme.media.minLaptop}) {
				font-size: ${({ theme }) => theme.fontSize.medium};
			}
		}

		img {
			display: block;
			width: 100%;
			height: auto;
		}

		a {
			text-decoration: none;
			color: ${({ theme }) => theme.colors.primaryChangingColor};
		}

		button {
			cursor: pointer;
			background: transparent;
			border: none;
		}

		ul,
		ol {
			list-style: none;
		}

		input,
		textarea {
			outline: none;
		}
	`}
`;
