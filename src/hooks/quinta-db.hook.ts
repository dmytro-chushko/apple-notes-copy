import { useState } from "react";
import axios from "axios";
import { IGetAllNotes, INote } from "types/data.types";

interface IUseQuintaDb {
	getAllNotes: () => Promise<INote[] | undefined>;
	isLoading: boolean;
}

export const useQuintaDb = (): IUseQuintaDb => {
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

	return {
		getAllNotes,
		isLoading,
	};
};
