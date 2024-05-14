import { Loader } from "components/loader";
import { useDebounce } from "hooks/debounce.hook";
import { useQuintaDb } from "hooks/quinta-db.hook";
import { createContext, useEffect, useMemo, useState } from "react";
import { IEditNoteParams, INote, INoteContent } from "types/data.types";
import { TypeSetState } from "types/set-state.types";

interface IAppProvider {
  children: React.ReactNode;
}

interface IAppContext {
  isDark: boolean;
  searchTerm: string;
  notesList: INote[] | null;
  isLoading: boolean;
  activeId: string;
  isEdit: boolean;
  noteContent: INoteContent | null;
  isWorkspaceOpen: boolean;
  setIsDark: TypeSetState<boolean>;
  setSearchTerm: TypeSetState<string>;
  setNoteContent: TypeSetState<INoteContent | null>;
  setActiveId: TypeSetState<string>;
  setIsEdit: TypeSetState<boolean>;
  setIsWorkspaceOpen: TypeSetState<boolean>;
  handleDelete: () => Promise<void>;
  handleCreate: () => Promise<void>;
  handleEdit: ({ id, title, content }: IEditNoteParams) => Promise<void>;
  handleSearch: (searchTerm: string) => Promise<void>;
}

const initialTheme: boolean = JSON.parse(localStorage.getItem("isDark") || "");

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppContextProvider = ({ children }: IAppProvider) => {
  const [isDark, setIsDark] = useState<boolean>(initialTheme || false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeId, setActiveId] = useState<string>("");
  const [notesList, setNotesList] = useState<INote[] | null>(null);
  const [noteContent, setNoteContent] = useState<INoteContent | null>(null);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const {
    deleteNote,
    createNote,
    editNote,
    searchNote,
    updateNotesList,
    isLoading,
    setIsLoading,
  } = useQuintaDb({
    isDark,
    setNotesList,
  });

  const handleDelete = async () => {
    setNoteContent(null);
    await deleteNote(activeId);
    setActiveId("");
  };

  const handleCreate = async () => await createNote();

  const handleEdit = async ({ id, title, content }: IEditNoteParams) =>
    await editNote({ id, title, content });

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm) {
      setNoteContent(null);
      await searchNote(searchTerm);
      setActiveId("");
    } else {
      setIsLoading(true);
      await updateNotesList();
      setIsLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      isDark,
      searchTerm,
      notesList,
      isLoading,
      activeId,
      isEdit,
      noteContent,
      isWorkspaceOpen,
      setIsDark,
      setSearchTerm,
      setNoteContent,
      setActiveId,
      setIsEdit,
      setIsWorkspaceOpen,
      handleDelete,
      handleCreate,
      handleEdit,
      handleSearch,
    }),
    [
      isDark,
      searchTerm,
      notesList,
      isLoading,
      noteContent,
      activeId,
      isEdit,
      isWorkspaceOpen,
    ],
  );

  useEffect(() => {
    handleSearch(debouncedSearchTerm);
    setIsWorkspaceOpen(false);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <AppContext.Provider value={value}>
      {isLoading && <Loader show={isLoading} />}
      {children}
    </AppContext.Provider>
  );
};
