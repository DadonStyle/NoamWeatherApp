import { Dispatch, FC, SetStateAction, useState } from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import useDebounce from "../../hooks/useDebounce";
import useAutoComplete from "../../queries/useAutoComplete";
import { CityDetailsType } from "../../types/types";

const SearchBar: FC<{
  updateData: Dispatch<SetStateAction<CityDetailsType>>;
}> = ({ updateData }) => {
  const [searchString, setSearchString] = useState<string>("");
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

  const handleOnSelectOption = (_: unknown, values: string) => {
    if (!isSearchEnabled || !values) return setSearchString("");
    const cityData = findCityInSearchOptions(values);
    if (!cityData) return;
    const cityDetailsObj: CityDetailsType = {
      key: cityData.Key,
      name: cityData.LocalizedName,
      country: cityData.Country.LocalizedName,
    };
    if (cityData?.LocalizedName) setSearchString(cityData.LocalizedName);
    updateData(cityDetailsObj);
  };

  return (
    <SearchComponent
      onChangeFunc={handleOnChangeInput}
      onSelectFunc={handleOnSelectOption}
      searchString={debouncedString}
      setSearchString={setSearchString}
      searchOptions={searchOptions}
    />
  );
};

export default SearchBar;
