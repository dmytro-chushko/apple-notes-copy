import { useEffect } from "react";
import { useQuintaDb } from "hooks/quinta-db.hook";
import { createContext, useMemo, useState } from "react";
import { TypeSetState } from "types/set-state.types";
import { INote } from "types/data.types";

interface IAppProvider {
	children: React.ReactNode;
}

interface IAppContext {
	isDark: boolean;
	searchTerm: string;
	notesList: INote[] | null;
	isLoading: boolean;
	setIsDark: TypeSetState<boolean> | null;
	setSearchTerm: TypeSetState<string> | null;
}

export const AppContext = createContext<IAppContext>({
	isDark: true,
	searchTerm: "",
	notesList: null,
	isLoading: false,
	setIsDark: null,
	setSearchTerm: null,
});

export const AppContextProvider = ({ children }: IAppProvider) => {
	const [isDark, setIsDark] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [notesList, setNotesList] = useState<INote[] | null>(null);
	const { getAllNotes, isLoading } = useQuintaDb();
	const value = useMemo(
		() => ({ isDark, searchTerm, notesList, isLoading, setIsDark, setSearchTerm }),
		[isDark, searchTerm, notesList, isLoading],
	);

	useEffect(() => {
		const fetchNotesList = async () => {
			const dataList = await getAllNotes();
			dataList && setNotesList(dataList);
		};
		fetchNotesList();
	}, []);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
