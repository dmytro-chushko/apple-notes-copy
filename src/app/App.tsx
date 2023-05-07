import React, { useContext } from "react";
import "./App.css";
import { ThemeSwitcher } from "components/theme-switcher";
import { AppContext } from "providers";

function App() {
	const { isDark, setIsDark } = useContext(AppContext);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDark && setIsDark(state => !state);
	};

	return (
		<div onClick={handleClick}>
			<ThemeSwitcher isChecked={isDark} />
		</div>
	);
}

export default App;
