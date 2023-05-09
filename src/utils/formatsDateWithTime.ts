export const formatsDateWithTime = (inputDate?: string): string => {
	const date = inputDate ? new Date(inputDate) : new Date();
	const month = date.getMonth() + 1;
	const today = date.getDate() !== new Date().getDate();
	const dayInterval = date.getHours() < 12 ? "AM" : "PM";

	const modifyDateOrTime = (value: number): string => (value < 10 ? `0${value}` : `${value}`);

	const modifyHours = (value: string): string => (+value > 12 ? `${+value - 12}` : `${value}`);

	return `${
		today
			? `${modifyDateOrTime(date.getDate())}/${modifyDateOrTime(month)}/${date.getFullYear()} `
			: ``
	}${modifyHours(modifyDateOrTime(date.getHours()))}:${modifyDateOrTime(
		date.getMinutes(),
	)} ${dayInterval}`;
};
