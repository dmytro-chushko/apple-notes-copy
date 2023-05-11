import styled from "styled-components";

export const SideBarContainer = styled.aside`
	width: 30%;
	height: calc(100vh - 79px);
	padding: ${({ theme }) => theme.size.m};

	overflow-y: scroll;

	@media (${({ theme }) => theme.media.minLaptop}) {
		::-webkit-scrollbar {
			width: 10px;
		}

		::-webkit-scrollbar-track {
			background: ${({ theme }) => theme.colors.primaryChangingBgc};
		}

		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.colors.hoveredCardBgc};
			border-radius: ${({ theme }) => theme.borderRadius.decorative};
			border: ${({ theme }) => theme.border.secondaryBorder};
		}
	}

	@media (${({ theme }) => theme.media.maxTablet}) {
		height: calc(100vh - 58px);
	}

	@media (${({ theme }) => theme.media.maxMobile}) {
		height: calc(100vh - 44px);
		width: 100%;
	}
`;
