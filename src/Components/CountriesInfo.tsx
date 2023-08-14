import { useContext } from "react";
import { AppContext } from "../App";
import Data from "../assets/data.json";
export default function CountriesInfo() {
	const {
		setCountryName,
		setCountryNativeName,
		setCountryPopulation,
		setCountryRegion,
		setCountrySubRegion,
		setCountryCapital,
		setCountryCurrencies,
		setCountryLanguages,
		setBorderCountries,
		setCountryTopLevelDomains,
		themeSwitcher, 
		searchValue, 
		continentCountries,
		showCountryInfoState,
		setShowCountryInfoState,
		countryImageUrl, 
		setCountryImageUrl
	} = useContext(AppContext);
	return (
			<div className="countriesInfo">
				{
					Data.map((ele) => {
						if(searchValue === ""){
							if(continentCountries === "") {
								return (
									<div
									onClick={()=> {
										setShowCountryInfoState(prev => prev = true);
										setCountryName(ele.name);
										setCountryNativeName(ele.nativeName)
										setCountryPopulation(ele.population.toString())
										setCountryRegion(ele.region);
										setCountrySubRegion(ele.subregion);
										setCountryCapital(ele.capital);
										setCountryTopLevelDomains(ele.topLevelDomain)
										setCountryCurrencies(ele.currencies)
										setCountryLanguages(ele.languages);
										setBorderCountries(ele.borders);
										setCountryImageUrl(ele.flag);
									}} 
									key={ele.name} className={themeSwitcher === "Dark Mode" ? "card dark" : "card very-light"}>
										<img src={ele.flags.png} alt="Country Flag"/>
										<p className="countryName">
											{ele.name}
										</p>
										<p className="population">
											Population: {ele.population}
										</p>
										<p className="region">
											Region: {ele.region}
										</p>
										<p className="capital">
											Capital: {ele.capital}
										</p>
									</div>
								)
							}else {
								if(continentCountries === ele.region) {
									return (
										<div
										onClick={()=> {
											setShowCountryInfoState(prev => prev = true);
											setCountryName(ele.name);
											setCountryNativeName(ele.nativeName)
											setCountryPopulation(ele.population.toString())
											setCountryRegion(ele.region);
											setCountrySubRegion(ele.subregion);
											setCountryCapital(ele.capital);
											setCountryTopLevelDomains(ele.topLevelDomain)
											setCountryCurrencies(ele.currencies)
											setCountryLanguages(ele.languages);
											setBorderCountries(ele.borders); 
											setCountryImageUrl(ele.flag);
										}}
										key={ele.name} className={themeSwitcher === "Dark Mode" ? "card dark" : "card very-light"}>
											<img src={ele.flags.png} alt="Country Flag"/>
											<p className="countryName">
												{ele.name}
											</p>
											<p className="population">
												Population: {ele.population}
											</p>
											<p className="region">
												Region: {ele.region}
											</p>
											<p className="capital">
												Capital: {ele.capital}
											</p>
										</div>
									)
								}
							}
						}else {
							let newArr = ele.name.split("");
							
							let newArrTwo = [];
							for(let i = 0; i < searchValue.length; i++) {
								newArrTwo.push(newArr[i])
							}
							let newVariable = newArrTwo.join("");
							if(newVariable === searchValue) {
								return (
									<div
									onClick={()=> {
										setShowCountryInfoState(prev => prev = true);
										setCountryName(ele.name);
										setCountryNativeName(ele.nativeName)
										setCountryPopulation(ele.population.toString())
										setCountryRegion(ele.region);
										setCountrySubRegion(ele.subregion);
										setCountryCapital(ele.capital);
										setCountryTopLevelDomains(ele.topLevelDomain)
										setCountryCurrencies(ele.currencies)
										setCountryLanguages(ele.languages);
										setBorderCountries(ele.borders);
										setCountryImageUrl(ele.flag);
									}} 
									key={ele.name} className={themeSwitcher === "Dark Mode" ? "card dark" : "card very-light"}>
										<img src={ele.flags.png} alt="Country Flag"/>
										<p className="countryName">
											{ele.name}
										</p>
										<p className="population">
											Population: {ele.population}
										</p>
										<p className="region">
											Region: {ele.region}
										</p>
										<p className="capital">
											Capital: {ele.capital}
										</p>
									</div>
								)
							}
						}
					})
				}
			</div>
	)
}