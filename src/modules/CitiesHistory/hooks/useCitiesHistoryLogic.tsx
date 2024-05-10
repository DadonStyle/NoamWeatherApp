import { useEffect } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { CityDetailsType } from "../../../types/types";

const useCitiesHistoryLogic = (
  cityDetailsState: CityDetailsType | undefined
) => {
  const [cityList, setCityList] = useLocalStorage("citiesHistory", []);

  useEffect(() => {
    if (!cityDetailsState) return;
    const isCityExist = cityList.some(
      (cityObj: CityDetailsType) => cityObj.key === cityDetailsState?.key
    );
    if (!isCityExist) {
      setCityList([...cityList, cityDetailsState]);
    }
  }, [cityDetailsState]);

  const removeFromListByKey = (key: string) => {
    const newList = cityList.filter(
      (fill: CityDetailsType) => fill.key !== key
    );
    setCityList(newList);
  };

  return {
    cityList: cityList,
    setCityList: setCityList,
    removeFunc: removeFromListByKey,
  };
};

export default useCitiesHistoryLogic;
