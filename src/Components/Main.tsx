import React,{useState, useContext} from "react";
import ArrowDown from "../assets/chervon down.png"
import { AppContext } from "../App";
import SearchCountry from "./SearchCountry";
import FilterBy from "./FilterBy";
import CountriesInfo from "./CountriesInfo";

export default function Main() {
    const {
			countryName,
			countryNativeName,
			countryPopulation,
			countryRegion,
			countrySubRegion, 
			countryCapital, 
			countryCurrencies,
			countryLanguages,
			borderCountries,
			countryTopLevelDomains,
			themeSwitcher,
			setThemeSwitcher,
			setShowCountryInfoState, 
			showCountryInfoState,
			countryImageUrl,
			setCountryImageUrl
		} = useContext(AppContext);
    const handleBackBtn = function() {
			setShowCountryInfoState(prev => !prev);
		}
		let countryCurrArr = [];
		if(countryCurrencies != undefined) {
			for(let i = 0; i < countryCurrencies?.length; i++) {
				countryCurrArr.push(countryCurrencies[i].name);
			}
		}
		let countryLanArr = [];
		for(let i = 0; i < countryLanguages?.length; i++) {
			countryLanArr.push(countryLanguages[i].name);
		}
		if(!showCountryInfoState) {
			return (
				<div 
            className={themeSwitcher === "Dark Mode" ? "main very-dark"
            : "main light"}>
            <div className="container">
                <div className="top-elements">
                    <SearchCountry/>
                    <FilterBy/>
                </div>
                <CountriesInfo/>
            </div>
        </div>
			)
		} else {
			return (
				<div 
				  className={themeSwitcher === "Dark Mode" ? "selectedCountryInfo very-dark": "selectedCountryInfo light"}>
					<div className="container">
						<button 
							onClick={handleBackBtn}
							className={themeSwitcher === "Dark Mode" ?"dark back" : "very-light back"}>
								<div className="backAndSvg">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
										<title>arrow-left2</title>
										<path fill={themeSwitcher === "Dark Mode" ?"#FFF" : "#000"} d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"/>
									</svg>
									<span>Back</span>
								</div>
							</button>
						<div className="card">
							<img src={countryImageUrl} alt="" />
							<div className="moreInfo">
								<h3>{countryName}</h3>
								<div className="paragraphs">
									<div className="one">
										<p><span>Native Name:</span> {countryNativeName}</p>
										<p><span>Population:</span> {countryPopulation}</p>
										<p><span>Region:</span> {countryRegion}</p>
										<p><span>Sub Region: </span>{countrySubRegion}</p>
										<p><span>Capital:</span> {countryCapital}</p>
									</div>
									<div className="two">
										<p><span>Top Level Domain:</span> {countryTopLevelDomains}</p>
										<p><span>Curenceise: </span>{countryCurrArr.join(", ")}</p>
										<p><span>Languages:</span> {countryLanArr.join(", ")}</p>
									</div>
								</div>
								<div className="border-countries">
								<p>
								Border Countries: 
								</p>
								<div className="btns">
									{borderCountries?.map((ele, index) => {
										return(
											<button key={index}
												className={themeSwitcher === "Dark Mode" ?"dark" : "very-light"}
											>{ele}</button>
										)
									})}
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
		
}
