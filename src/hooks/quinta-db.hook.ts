import { useState } from "react";
import axios, { AxiosError } from "axios";
import { IEditNoteParams, IGetAllNotes, INote } from "types/data.types";
import { TypeSetState } from "types/set-state.types";
import { Notification } from "utils";

interface IUseQuintaDb {
	getAllNotes: () => Promise<INote[] | undefined>;
	deleteNote: (id: string) => Promise<void>;
	createNote: () => Promise<void>;
	editNote: ({ id, title, content }: IEditNoteParams) => Promise<void>;
	searchNote: (searchTerm: string) => Promise<void>;
	updateNotesList: () => Promise<void>;
	setIsLoading: TypeSetState<boolean>;
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
	const noteTitle = process.env.REACT_APP_NOTE_TITLE || "";
	const noteContent = process.env.REACT_APP_NOTE_CONTENT || "";
	const noteDate = process.env.REACT_APP_NOTE_DATE || "";
	const notification = new Notification(isDark);

	const getAllNotes = async (): Promise<INote[] | undefined> => {
		try {
			const { data } = await axios.get<IGetAllNotes>(
				`${baseUrl}/apps/${appId}/dtypes/entity/${entityId}.json`,
				{
					params: {
						rest_api_key: apiKey,
						name_value: 1,
					},
				},
			);

			return data.records;
		} catch (error) {
			notification.error((error as AxiosError).message);
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
			notification.success("Note has been deleted");
		} catch (error) {
			notification.error((error as AxiosError).message);
		}
	};

	const createNote = async (): Promise<void> => {
		try {
			setIsLoading(true);
			await axios.post(`${baseUrl}/apps/${appId}/dtypes.json`, {
				rest_api_key: apiKey,
				json_values: JSON.stringify({
					entity_id: entityId,
					[noteTitle]: "New Note",
					[noteContent]: "Write text...",
				}),
			});
			await updateNotesList();
			setIsLoading(false);
			notification.success("Note has been created");
		} catch (error) {
			notification.error((error as AxiosError).message);
		}
	};

	const editNote = async ({ id, title, content }: IEditNoteParams): Promise<void> => {
		try {
			await axios.put(`${baseUrl}/apps/${appId}/dtypes/${id}.json`, {
				rest_api_key: apiKey,
				json_values: JSON.stringify({
					[noteTitle]: title,
					[noteContent]: content,
					[noteDate]: new Date(),
				}),
			});
			await updateNotesList();
		} catch (error) {
			notification.error((error as AxiosError).message);
		}
	};

	const searchNote = async (searchTerm: string): Promise<void> => {
		try {
			const { data } = await axios.post<IGetAllNotes>(
				`${baseUrl}/search/${appId}.json`,
				{
					search: [
						[
							{
								a: noteTitle,
								b: searchTerm,
								o: "like",
							},
						],
						[
							{
								a: noteContent,
								b: searchTerm,
								o: "like",
							},
						],
					],
				},
				{
					params: {
						rest_api_key: apiKey,
						entity_id: entityId,
						name_value: 1,
					},
				},
			);
			setNotesList(data.records);
		} catch (error) {
			notification.error((error as AxiosError).message);
		}
	};

	return {
		getAllNotes,
		deleteNote,
		createNote,
		editNote,
		searchNote,
		updateNotesList,
		setIsLoading,
		isLoading,
	};
};
