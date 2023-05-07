import * as Styled from "./theme-switcher.styled";

interface IThemeSwitcher {
	isChecked: boolean;
}

export const ThemeSwitcher = ({ isChecked }: IThemeSwitcher) => {
	return (
		<Styled.SwitcherContainer>
			<Styled.LightThemeIcon />
			<Styled.DarkThemeIcon />
			<Styled.SwitcherLever isChecked={isChecked} />
			<input type="checkbox" />
		</Styled.SwitcherContainer>
	);
};
