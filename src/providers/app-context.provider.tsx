import { useQuintaDb } from "hooks/quinta-db.hook";
import { createContext, useCallback, useMemo, useState } from "react";
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
	activeId: string;
	noteContent: INoteContent | null;
	setIsDark: TypeSetState<boolean>;
	setSearchTerm: TypeSetState<string>;
	setNoteContent: TypeSetState<INoteContent | null>;
	setActiveId: TypeSetState<string>;
	handleDelete: () => Promise<void>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppContextProvider = ({ children }: IAppProvider) => {
	const [isDark, setIsDark] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [activeId, setActiveId] = useState<string>("");
	const [notesList, setNotesList] = useState<INote[] | null>(null);
	const [noteContent, setNoteContent] = useState<INoteContent | null>(null);
	const { deleteNote, isLoading } = useQuintaDb({ isDark, setNotesList });

	const handleDelete = async () => {
		setNoteContent(null);
		await deleteNote(activeId);
		setActiveId("");
	};

	const value = useMemo(
		() => ({
			isDark,
			searchTerm,
			notesList,
			isLoading,
			activeId,
			noteContent,
			setIsDark,
			setSearchTerm,
			setNoteContent,
			setActiveId,
			handleDelete,
		}),
		[isDark, searchTerm, notesList, isLoading, noteContent, activeId],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
