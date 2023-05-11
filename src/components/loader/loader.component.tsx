import { RotatingLines } from "react-loader-spinner";
import { ILoader } from "styles/consts";

import * as Styled from "./loader.styled";

export const Loader = ({ show }: ILoader) => {
	return (
		<Styled.LoaderBackdrop show={show}>
			<RotatingLines
				strokeColor="#8A8A8E"
				strokeWidth="5"
				animationDuration="0.75"
				width="200"
				visible={true}
			/>
		</Styled.LoaderBackdrop>
	);
};
