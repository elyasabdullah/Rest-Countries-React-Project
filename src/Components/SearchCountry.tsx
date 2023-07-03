import {useContext} from "react";

import { AppContext } from "../App";
export default function SearchCountry() {
	const {searchValue, setSearchValue} = useContext(AppContext);
	const handleChange = (event:any) => {
		setSearchValue((prev) => {
			return (
				event.target.value
			)
		})
	}
    return (
        <div className="searchCountry">
            <input
								onChange={handleChange}
                type="text"
                placeholder="Search for a country..."
            />
        </div>
    )
}