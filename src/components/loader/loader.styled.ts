import styled from "styled-components";
import { ILoader } from "styles/consts";

export const LoaderBackdrop = styled.div<ILoader>`
	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(10px);
	pointer-events: ${({ show }) => (show ? "auto" : "none")};
	opacity: ${({ show }) => (show ? 1 : 0)};
	z-index: 1;

	transition: all ease-in-out 0.2s;
`;
