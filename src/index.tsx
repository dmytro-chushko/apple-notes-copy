import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app.component";
import { GlobalStyle } from "styles/global.styled";
import { AppContextProvider, AppThemeProvider } from "providers";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<AppContextProvider>
			<AppThemeProvider>
				<GlobalStyle />
				<App />
			</AppThemeProvider>
		</AppContextProvider>
	</React.StrictMode>,
);
