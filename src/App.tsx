import React, { useState, useContext, createContext } from 'react'
import Header from './Components/Header';
import Main from './Components/Main';

interface MyContextValues {
  themeSwitcher: string;
  setThemeSwitcher: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue:React.Dispatch<React.SetStateAction<string>>;
  continentCountries: string;
  setContinentCountries: React.Dispatch<React.SetStateAction<string>>;
  showChoices: boolean;
  setShowChoices:  React.Dispatch<React.SetStateAction<boolean>>;
  showCountryInfoState: boolean;
  setShowCountryInfoState: React.Dispatch<React.SetStateAction<boolean>>
  countryName: string;
  setCountryName: React.Dispatch<React.SetStateAction<string>>;
  countryNativeName: string; 
  setCountryNativeName: React.Dispatch<React.SetStateAction<string>>;
  countryPopulation:string; 
  setCountryPopulation:React.Dispatch<React.SetStateAction<string>>;
  countryRegion: string; 
  setCountryRegion: React.Dispatch<React.SetStateAction<string>>;
  countrySubRegion:string; 
  setCountrySubRegion: React.Dispatch<React.SetStateAction<string>>;
  countryCapital:string | undefined; 
  setCountryCapital:React.Dispatch<React.SetStateAction<string | undefined>>;
  countryCurrencies: { code: string; name: string; symbol: string; }[]| undefined;
  setCountryCurrencies:React.Dispatch<React.SetStateAction<{ code: string; name: string; symbol: string; }[] | undefined>>;
  countryLanguages: ({ iso639_1: string; iso639_2: string; name: string; nativeName: string; } | { iso639_2: string; name: string; iso639_1?: string | undefined; nativeName?: string | undefined; })[];
  setCountryLanguages:React.Dispatch<React.SetStateAction<({ iso639_1: string; iso639_2: string; name: string; nativeName: string; } | { iso639_2: string; name: string; iso639_1?: string | undefined; nativeName?: string | undefined; })[]>>;
  borderCountries: string[] | undefined;
  setBorderCountries:React.Dispatch<React.SetStateAction<string[] | undefined>>;
  countryTopLevelDomains: string[]; 
  setCountryTopLevelDomains: React.Dispatch<React.SetStateAction<string[]>>
}
export const AppContext = React.createContext<MyContextValues>({
  themeSwitcher:'',
  setThemeSwitcher: ()=> undefined,
  searchValue: "",
  setSearchValue: () => undefined,
  continentCountries: "",
  setContinentCountries: () => undefined,
  showChoices: false,
  setShowChoices: () => undefined,
  showCountryInfoState:false,
  setShowCountryInfoState: () => undefined,
  countryName: "",
  setCountryName: () => undefined,
  countryNativeName: "",
  setCountryNativeName: () => undefined,
  countryPopulation:"", 
  setCountryPopulation:()=> undefined,
  countryRegion: "", 
  setCountryRegion: ()=> undefined,
  countrySubRegion:"", 
  setCountrySubRegion:() => undefined,
  countryCapital:"", 
  setCountryCapital:()=> undefined,
  countryCurrencies:[], 
  setCountryCurrencies:()=> undefined,
  countryLanguages:[], 
  setCountryLanguages:()=> undefined,
  borderCountries:[], 
  setBorderCountries:()=> undefined,
  countryTopLevelDomains: [], 
  setCountryTopLevelDomains: ()=> undefined
})
function App() {
  const [themeSwitcher, setThemeSwitcher] = useState("Dark Mode");
  const [searchValue, setSearchValue] = useState("");
  const [continentCountries, setContinentCountries] = useState("");
  const [showChoices, setShowChoices] = useState(false);
  const [showCountryInfoState, setShowCountryInfoState] = useState(false);
  // Country Informations States
  const [countryName, setCountryName] = useState("");
  const [countryNativeName, setCountryNativeName] = useState("");
  const [countryPopulation, setCountryPopulation] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [countrySubRegion, setCountrySubRegion] = useState("");
  const [countryCapital, setCountryCapital] = useState<string|undefined>("");
  const [countryCurrencies, setCountryCurrencies] = useState<{ code: string; name: string; symbol: string; }[] | undefined>([]);
  const [countryLanguages, setCountryLanguages] = useState<({ iso639_1: string; iso639_2: string; name: string; nativeName: string; } | { iso639_2: string; name: string; iso639_1?: string | undefined; nativeName?: string | undefined; })[]>([]);
  const [borderCountries, setBorderCountries] = useState<string[] | undefined>([]);
  const [countryTopLevelDomains, setCountryTopLevelDomains] = useState<string[]>([])
  return ( 
    <div
      onClick={() => {
        if(showChoices) {
          setShowChoices(!showChoices)
        }
      }}
    className="App">
      <AppContext.Provider
        value={{
          themeSwitcher,
          setThemeSwitcher,
          searchValue,
          setSearchValue,
          continentCountries,
          setContinentCountries,
          showChoices,
          setShowChoices,
          showCountryInfoState,
          setShowCountryInfoState,
          countryName,
          setCountryName,
          countryNativeName,
          setCountryNativeName,
          countryPopulation, 
          setCountryPopulation,
          countryRegion, 
          setCountryRegion,
          countrySubRegion, 
          setCountrySubRegion,
          countryCapital, 
          setCountryCapital,
          countryCurrencies, 
          setCountryCurrencies,
          countryLanguages, 
          setCountryLanguages,
          borderCountries, 
          setBorderCountries,
          countryTopLevelDomains, 
          setCountryTopLevelDomains,
        }}
      >
        <Header/>
        <Main/>
      </AppContext.Provider>
    </div>
  )
}


export default App



