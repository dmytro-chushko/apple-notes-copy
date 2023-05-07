import { createContext, useMemo, useState } from "react";
import { TypeSetState } from "types/set-state.types";

interface IAppProvider {
	children: React.ReactNode;
}

interface IAppContext {
	isDark: boolean;
	setIsDark: TypeSetState<boolean> | null;
}

export const AppContext = createContext<IAppContext>({
	isDark: true,
	setIsDark: null,
});

export const AppContextProvider = ({ children }: IAppProvider) => {
	const [isDark, setIsDark] = useState<boolean>(true);
	const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
