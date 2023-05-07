import { createContext, useMemo, useState } from "react";
import { TypeSetState } from "types/set-state.types";

interface IAppProvider {
	children: React.ReactNode;
}

interface IAppContext {
	isDark: boolean;
	searchTerm: string;
	setIsDark: TypeSetState<boolean> | null;
	setSearchTerm: TypeSetState<string> | null;
}

export const AppContext = createContext<IAppContext>({
	isDark: true,
	searchTerm: "",
	setIsDark: null,
	setSearchTerm: null,
});

export const AppContextProvider = ({ children }: IAppProvider) => {
	const [isDark, setIsDark] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const value = useMemo(
		() => ({ isDark, searchTerm, setIsDark, setSearchTerm }),
		[isDark, searchTerm],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
