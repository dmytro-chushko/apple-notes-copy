import { Header } from "components/header";

import * as Styled from "./app.styled";
import { SideBar } from "components/side-bar";
import { Workspace } from "components/workspace";

function App() {
	return (
		<>
			<Header />
			<Styled.MainWrapper>
				<SideBar />
				<Workspace />
			</Styled.MainWrapper>
		</>
	);
}

export default App;
