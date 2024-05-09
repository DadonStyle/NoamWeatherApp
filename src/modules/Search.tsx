import { Dispatch, FC, SetStateAction, useState } from "react";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import useDebounce from "../hooks/useDebounce";
import useAutoComplete from "../queries/useAutoComplete";
import { CityDetailsType } from "../types/WeatherTypes";

const Search: FC<{
  cityName: string;
  updateData: Dispatch<SetStateAction<CityDetailsType>>;
}> = ({ cityName, updateData }) => {
  const [searchString, setSearchString] = useState<string>(cityName || "");
  const debouncedString = useDebounce(searchString, 500);
  const isSearchEnabled = debouncedString?.length > 1;
  const { searchOptions } = useAutoComplete(debouncedString, isSearchEnabled);

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.currentTarget.value);
  };

  const findCityInSearchOptions = (cityName: string) => {
    if (!isSearchEnabled) return;
    const match = searchOptions.find(
      (item: any) => item.LocalizedName === cityName
    );
    return match;
  };

  const handleOnSelectInput = (e: any, values: any) => {
    if (!isSearchEnabled || !values) return setSearchString("");
    e.stopPropagation();
    const cityData = findCityInSearchOptions(values);
    if (!cityData) return;
    const cityDetailsObj: CityDetailsType = {
      key: cityData.Key,
      name: cityData.LocalizedName,
      country: cityData.Country.LocalizedName,
    };
    updateData(cityDetailsObj);
  };

  return (
    <SearchComponent
      onChangeFunc={handleOnChangeInput}
      onSelectFunc={handleOnSelectInput}
      searchString={debouncedString}
      searchOptions={searchOptions}
    />
  );
};

export default Search;
