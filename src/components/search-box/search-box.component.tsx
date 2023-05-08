import { useContext, useState, useEffect } from "react";

import * as Styled from "./search-box.styled";
import { AppContext } from "providers";
import { useDebounced } from "hooks/debounce.hook";

export const SearchBox = () => {
	const { setSearchTerm } = useContext(AppContext);
	const [value, setValue] = useState<string>("");
	const debouncedSearchTerm = useDebounced(value, 500);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		if (debouncedSearchTerm) {
			setSearchTerm && setSearchTerm(debouncedSearchTerm);
		}
	}, [debouncedSearchTerm]);

	return (
		<Styled.SearchContainer>
			<Styled.SearchField type="text" value={value} onChange={handleChange} />
			<Styled.Icon />
		</Styled.SearchContainer>
	);
};
