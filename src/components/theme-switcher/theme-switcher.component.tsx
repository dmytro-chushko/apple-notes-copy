import { TypeSetState } from "types/set-state.types";
import * as Styled from "./theme-switcher.styled";

interface IThemeSwitcher {
	isChecked: boolean;
	switcher: TypeSetState<boolean> | null;
}

export const ThemeSwitcher = ({ isChecked, switcher }: IThemeSwitcher) => {
	const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
		e.preventDefault();
		switcher && switcher(state => !state);
	};

	return (
		<Styled.SwitcherContainer onClick={handleClick}>
			<Styled.LightThemeIcon />
			<Styled.DarkThemeIcon />
			<Styled.SwitcherLever isChecked={isChecked} />
			<input type="checkbox" />
		</Styled.SwitcherContainer>
	);
};
