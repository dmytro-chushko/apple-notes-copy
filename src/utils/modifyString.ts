export const modifyString = (title: string): string => {
	const modifiedTitle = title.length > 16 ? `${title.slice(0, 12)}...` : `${title}`;

	return modifiedTitle;
};
