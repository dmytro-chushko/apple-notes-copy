import { ToastContainer } from "react-toastify";
import { Header } from "components/header";
import { SideBar } from "components/side-bar";
import { Workspace } from "components/workspace";

import "react-toastify/dist/ReactToastify.min.css";

import * as Styled from "./app.styled";

function App() {
	return (
		<>
			<Header />
			<Styled.MainWrapper>
				<SideBar />
				<Workspace />
			</Styled.MainWrapper>
			<ToastContainer />
		</>
	);
}

export default App;
