import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

export const SearchContainer = styled.div`
	position: relative;
`;

export const SearchField = styled.input`
	height: ${({ theme }) => theme.size.xl};
	padding: ${({ theme }) => theme.size.s};
	padding-left: ${({ theme }) => theme.size.xl};

	color: ${({ theme }) => theme.colors.primaryChangingColor};
	border-radius: 10px;
	border: none;
	background-color: ${({ theme }) => theme.colors.primaryChangingBgc};

	transition: ${({ theme }) => theme.animation.primaryTransition};
`;

export const Icon = styled(SearchIcon)`
	position: absolute;
	top: 50%;
	left: ${({ theme }) => theme.size.s};

	width: ${({ theme }) => theme.fontSize.medium};
	height: ${({ theme }) => theme.fontSize.medium};

	stroke: ${({ theme }) => theme.colors.primaryChangingColor};
	transform: translateY(-50%);
`;
