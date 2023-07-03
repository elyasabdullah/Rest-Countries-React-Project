import { useContext } from "react";
import { AppContext } from "../App";

export default function FilterBy() {
  const {themeSwitcher, showChoices, setShowChoices, setContinentCountries} = useContext(AppContext);
  const handleFilterClick = () => {
    setShowChoices(!showChoices);
  }
  const getAfricaCountries = () => {
    setContinentCountries("Africa")
  }
  const getAsiaCountries = () => {
    setContinentCountries("Asia")
  }
  const getAmericaCountries = () => {
    setContinentCountries("Americas")
  }
  const getEuropeCountries = ()=> {
    setContinentCountries("Europe")
  }
  const getOceaniaCountries = ()=> {
    setContinentCountries("Oceania")
  }
  return (
      <div className="filterby">
          <div 
            onClick={handleFilterClick}
            className={themeSwitcher === "Dark Mode" ?
            "text very-dark" : "text very-light"}>
              <p>Filter by Region</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
              </svg>
          </div>
          <ul
            className={themeSwitcher === "Dark Mode" && showChoices
            ? "very-dark" 
            : themeSwitcher === "Dark Mode" && !showChoices
            ? "very-dark none"
            : themeSwitcher === "Light Mode" && showChoices
            ? "very-light"
            : "very-light none"
          }
          >
              <li
                onClick={getAfricaCountries}
              >Africa</li>
              <li
                onClick={getAmericaCountries}
              >America</li>
              <li
                onClick={getAsiaCountries}
              >Asia</li>
              <li
              onClick={getEuropeCountries}
              >Europe</li>
              <li
                onClick={getOceaniaCountries}
              >Oceania</li>
          </ul>
      </div>
  )
}