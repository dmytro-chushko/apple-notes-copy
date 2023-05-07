import { ThemeSwitcher } from "components/theme-switcher";
import { AppContext } from "providers";
import { useContext } from "react";
import { ControlsBar } from "components/controls-bar";
import { SearchBox } from "components/search-box";

import * as Styled from "./heder.styled";

export const Header = () => {
	const { isDark, setIsDark } = useContext(AppContext);

	return (
		<Styled.HeaderContainer>
			<ControlsBar />
			<Styled.SearchWrapper>
				<SearchBox />
			</Styled.SearchWrapper>
			<ThemeSwitcher isChecked={isDark} switcher={setIsDark} />
		</Styled.HeaderContainer>
	);
};
