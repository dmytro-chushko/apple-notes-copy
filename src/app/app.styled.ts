import styled from "styled-components";

export const MainWrapper = styled.main`
	display: flex;
	padding-top: 79px;

	@media (${({ theme }) => theme.media.maxTablet}) {
		padding-top: 58px;
	}

	@media (${({ theme }) => theme.media.maxMobile}) {
		padding-top: 44px;
	}
`;
