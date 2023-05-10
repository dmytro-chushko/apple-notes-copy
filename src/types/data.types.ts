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

export interface INoteContent {
	title: string;
	content: string;
	date: string;
}

export enum DATE_TYPE {
	WORKSPACE = "workspace",
	SIDE_BAR = "side-bar",
}

export interface IEditNoteParams {
	id: string;
	title: string;
	content: string;
}
