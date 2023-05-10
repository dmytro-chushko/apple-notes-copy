export interface ITheme {
	colors: {
		primaryChangingBgc: string;
		primaryChangingColor: string;
		secondaryChangingColor: string;
		secondaryChangingBgc: string;
		primaryColor: string;
		primariBgc: string;
		modalBgc: string;
		primaryButtonBgc: string;
		primaryButtonHover: string;
		secondaryButtonHover: string;
		hoveredCardBgc: string;
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
		s: string;
		m: string;
		l: string;
		xl: string;
		themeSwitcherHeight: string;
		themeSwithcerWidth: string;
	};
	border: {
		primaryBorder: string;
		secondaryBorder: string;
	};
	borderRadius: {
		fields: string;
		decorative: string;
	};
	outline: {
		primaryButtonOutline: string;
	};
	animation: {
		primaryTransition: string;
		primaryAnimation: string;
	};
	media: {
		medMobile: string;
		maxMobile: string;
		minTablet: string;
		maxTablet: string;
		minLaptop: string;
		maxLaptop: string;
		minDesktop: string;
		maxDesktop: string;
	};
}

export const theme = (isDark?: boolean): ITheme => ({
	colors: {
		primaryChangingBgc: isDark ? "#3F3F3F" : "#FFFFFF",
		primaryChangingColor: isDark ? "#9F9FA5" : "#8A8A8E",
		secondaryChangingColor: isDark ? "#FFFFFF" : "#202020",
		secondaryChangingBgc: isDark ? "#1C1C1E" : "#ECECEC",
		primaryColor: "#FFFFFF",
		primariBgc: "#000000",
		modalBgc: "rgba(0,0,0,0.3)",
		primaryButtonBgc: "#007AFF",
		primaryButtonHover: "#1D49AA",
		secondaryButtonHover: isDark ? "#6D6D6D" : "#D6D6D6",
		hoveredCardBgc: isDark ? "#323232" : "#ECECEC",
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
		s: "0.5em",
		m: "1em",
		l: "1.5em",
		xl: "2em",
		themeSwitcherHeight: "30px",
		themeSwithcerWidth: "60px",
	},
	border: {
		primaryBorder: `2px solid ${isDark ? "#9F9FA5" : "#8A8A8E"}`,
		secondaryBorder: `2px solid ${isDark ? "#323232" : "#ECECEC"}`,
	},
	borderRadius: {
		fields: "10px",
		decorative: "6px",
	},
	outline: {
		primaryButtonOutline: "2px solid #93ACE3",
	},
	animation: {
		primaryTransition: "all ease-in-out 0.2s",
		primaryAnimation: "1s linear infinite",
	},
	media: {
		medMobile: "max-width: 389px",
		maxMobile: "max-width: 480px",
		minTablet: "min-width: 481px",
		maxTablet: "max-width: 1023px",
		minLaptop: "min-width: 1024px",
		maxLaptop: "max-width: 1279px",
		minDesktop: "min-width: 1280px",
		maxDesktop: "max-width: 1920px",
	},
});
