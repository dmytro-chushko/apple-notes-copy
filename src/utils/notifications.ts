import { toast, Theme } from "react-toastify";

interface INotification {
	themeType: boolean;
	theme: string;
	success: (massage: string, themeType: boolean) => void;
	error: (message: string, thmeType: boolean) => void;
}

export class Notification implements INotification {
	themeType: boolean;
	theme: Theme;

	constructor(themeType: boolean) {
		this.themeType = themeType;
		this.theme = this.themeType ? "dark" : "light";
	}

	success(message: string): void {
		toast.success(message, { theme: this.theme });
	}

	error(message: string): void {
		toast.error(message, { theme: this.theme });
	}
}
