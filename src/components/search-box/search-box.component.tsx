import { useContext } from "react";
import { AppContext } from "providers";

import * as Styled from "./search-box.styled";

export const SearchBox = () => {
	const { searchTerm, setSearchTerm } = useContext(AppContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<Styled.SearchContainer>
			<Styled.SearchField type="search" value={searchTerm} onChange={handleChange} />
			<Styled.Icon />
		</Styled.SearchContainer>
	);
};
