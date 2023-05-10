import { useContext, useState, useEffect } from "react";
import { AppContext } from "providers";
import { useDebounce } from "hooks/debounce.hook";

import * as Styled from "./search-box.styled";

export const SearchBox = () => {
	const { handleSearch } = useContext(AppContext);
	const [value, setValue] = useState<string>("");
	const debouncedSearchTerm = useDebounce(value, 500);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		handleSearch(debouncedSearchTerm);
	}, [debouncedSearchTerm]);

	return (
		<Styled.SearchContainer>
			<Styled.SearchField type="text" value={value} onChange={handleChange} />
			<Styled.Icon />
		</Styled.SearchContainer>
	);
};
