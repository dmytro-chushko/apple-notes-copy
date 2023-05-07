import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { AppContext } from "./app-context.provider";
import { theme } from "styles/theme.styled";

interface IAppThemeProvider {
	children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: IAppThemeProvider) => {
	const { isDark } = useContext(AppContext);

	return <ThemeProvider theme={theme(isDark)}>{children}</ThemeProvider>;
};
