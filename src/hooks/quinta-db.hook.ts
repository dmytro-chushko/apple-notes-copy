import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IGetAllNotes, INote } from "types/data.types";
import { TypeSetState } from "types/set-state.types";

interface IUseQuintaDb {
	getAllNotes: () => Promise<INote[] | undefined>;
	deleteNote: (id: string) => Promise<void>;
	isLoading: boolean;
}

interface IUseQuintaDbParams {
	isDark: boolean;
	setNotesList: TypeSetState<INote[] | null>;
}

export const useQuintaDb = ({ isDark, setNotesList }: IUseQuintaDbParams): IUseQuintaDb => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const baseUrl = process.env.REACT_APP_BASE_URL;
	const apiKey = process.env.REACT_APP_API_KEY;
	const appId = process.env.REACT_APP_APP_ID;
	const entityId = process.env.REACT_APP_ENTITY_ID;

	const getAllNotes = async (): Promise<INote[] | undefined> => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<IGetAllNotes>(
				`${baseUrl}/apps/${appId}/dtypes/entity/${entityId}.json`,
				{
					params: {
						rest_api_key: apiKey,
						name_value: 1,
					},
				},
			);
			setIsLoading(false);

			return data.records;
		} catch (error) {
			console.log(error);
		}
	};

	const updateNotesList = async () => {
		const dataList = await getAllNotes();
		if (dataList) {
			setNotesList(dataList);
		}
	};

	const deleteNote = async (id: string): Promise<void> => {
		try {
			setIsLoading(true);
			await axios.delete(`${baseUrl}/apps/${appId}/dtypes/${id}.json`, {
				params: {
					rest_api_key: apiKey,
				},
			});
			await updateNotesList();
			setIsLoading(false);
			toast.success("Note has been deleted", { theme: isDark ? "dark" : "light" });
		} catch (error) {
			toast.error((error as AxiosError).message, { theme: isDark ? "dark" : "light" });
		}
	};

	useEffect(() => {
		const fetchNotesList = async () => {
			await updateNotesList();
		};
		fetchNotesList();
	}, []);

	return {
		getAllNotes,
		deleteNote,
		isLoading,
	};
};
