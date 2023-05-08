export interface INote {
	id: string;
	values: {
		title: string;
		content: string;
		date: string;
	};
}

export interface IGetAllNotes {
	records: INote[];
}
