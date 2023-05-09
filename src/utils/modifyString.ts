export const modifyString = (title: string): string => {
	const modifiedTitle = title.length > 19 ? `${title.slice(0, 15)}...` : `${title}`;

	return modifiedTitle;
};
