import { useEffect } from "react";
import { useQuintaDb } from "hooks/quinta-db.hook";
import { createContext, useMemo, useState } from "react";
import { TypeSetState } from "types/set-state.types";
import { INote, INoteContent } from "types/data.types";

interface IAppProvider {
	children: React.ReactNode;
}

interface IAppContext {
	isDark: boolean;
	searchTerm: string;
	notesList: INote[] | null;
	isLoading: boolean;
	noteContent: INoteContent;
	setIsDark: TypeSetState<boolean> | null;
	setSearchTerm: TypeSetState<string> | null;
	setNoteContent: TypeSetState<INoteContent> | null;
}

export const AppContext = createContext<IAppContext>({
	isDark: true,
	searchTerm: "",
	notesList: null,
	isLoading: false,
	noteContent: { title: "", content: "", date: "" },
	setIsDark: null,
	setSearchTerm: null,
	setNoteContent: null,
});

export const AppContextProvider = ({ children }: IAppProvider) => {
	const [isDark, setIsDark] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [notesList, setNotesList] = useState<INote[] | null>(null);
	const [noteContent, setNoteContent] = useState<INoteContent>({
		title: "",
		content: "",
		date: "",
	});
	const { getAllNotes, isLoading } = useQuintaDb();
	const value = useMemo(
		() => ({
			isDark,
			searchTerm,
			notesList,
			isLoading,
			noteContent,
			setIsDark,
			setSearchTerm,
			setNoteContent,
		}),
		[isDark, searchTerm, notesList, isLoading, noteContent],
	);

	useEffect(() => {
		const fetchNotesList = async () => {
			const dataList = await getAllNotes();
			if (dataList) {
				setNotesList(dataList);
			}
		};
		fetchNotesList();
	}, []);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
