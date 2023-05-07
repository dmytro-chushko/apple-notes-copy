export interface ITheme {
	colors: {
		primaryChangingBgc: string;
		primaryChangingColor: string;
		secondaryChangingColor: string;
		secondaryChangingBgc: string;
		primaryColor: string;
		primariBgc: string;
		modalBgc: string;
	};
	fontSize: {
		base: string;
		regular: string;
		medium: string;
		large: string;
	};
	fontWeight: {
		regular: string;
		medium: string;
		bold: string;
	};
	size: {
		themeSwitcherHeight: string;
		themeSwithcerWidth: string;
	};
	border: {
		primaryBorder: string;
	};
	animation: {
		primaryTransition: string;
		primaryAnimation: string;
	};
}

export const theme = (isDark?: boolean): ITheme => ({
	colors: {
		primaryChangingBgc: isDark ? "#000000" : "#FFFFFF",
		primaryChangingColor: isDark ? "#9F9FA5" : "#8A8A8E",
		secondaryChangingColor: isDark ? "#FFFFFF" : "#202020",
		secondaryChangingBgc: isDark ? "#3F3F3F" : "#ECECEC",
		primaryColor: "#FFFFFF",
		primariBgc: "#000000",
		modalBgc: "rgba(0,0,0,0.3)",
	},
	fontSize: {
		base: "14px",
		regular: "1em",
		medium: "1.142em",
		large: "1.285em",
	},
	fontWeight: {
		regular: "400",
		medium: "500",
		bold: "700",
	},
	size: {
		themeSwitcherHeight: "30px",
		themeSwithcerWidth: "60px",
	},
	border: {
		primaryBorder: "2px solid #D1D5DB",
	},
	animation: {
		primaryTransition: "all ease-in-out 0.4s",
		primaryAnimation: "1s linear infinite",
	},
});
