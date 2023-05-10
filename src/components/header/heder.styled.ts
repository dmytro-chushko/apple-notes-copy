import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: ${({ theme }) => theme.size.s};

	background-color: ${({ theme }) => theme.colors.secondaryChangingBgc};

	transition: ${({ theme }) => theme.animation.primaryTransition};

	@media (${({ theme }) => theme.media.minTablet}) {
		padding: ${({ theme }) => theme.size.m};
	}

	@media (${({ theme }) => theme.media.minLaptop}) {
		padding: ${({ theme }) => theme.size.l};
	}
`;

export const SearchWrapper = styled.div`
	margin-left: auto;
	margin-right: ${({ theme }) => theme.size.m};

	@media (${({ theme }) => theme.media.medMobile}) {
		margin-right: 0;
	}
`;
