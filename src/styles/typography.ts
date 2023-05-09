import styled from "styled-components";

export const CardTitle = styled.h2`
	margin-bottom: ${({ theme }) => theme.size.s};

	font-size: ${({ theme }) => theme.fontSize.large};

	color: ${({ theme }) => theme.colors.secondaryChangingColor};

	transition: ${({ theme }) => theme.animation.primaryTransition};

	@media (${({ theme }) => theme.media.maxMobile}) {
		font-size: ${({ theme }) => theme.fontSize.medium};
	}
`;
