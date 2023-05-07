import { ThemeSwitcher } from "components/theme-switcher";
import { AppContext } from "providers";
import { useContext } from "react";

import * as Styled from "./heder.styled";
import { ControlsBar } from "components/controls-bar";

export const Header = () => {
	const { isDark, setIsDark } = useContext(AppContext);

	return (
		<Styled.HeaderContainer>
			<ControlsBar />
			<ThemeSwitcher isChecked={isDark} switcher={setIsDark} />
		</Styled.HeaderContainer>
	);
};
