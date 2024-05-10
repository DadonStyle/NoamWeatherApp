import { Stack, Theme, Typography } from "@mui/material";
import { FC, useState } from "react";
import { FlexBox } from "../../components/StyledComponents/FlexBox/FlexBox";
import SearchBar from "../../modules/SearchBar";
import useDailyDataPerCity from "../../queries/useDailyDataPerCity";
import { CityDetailsType } from "../../types/types";
import styles from "./Home.module.css";
import Tabs from "../../modules/Tabs/Tabs";
import DailyInfoContainer from "../../modules/DailyInfoContainer/DailyInfoContainer";
import { Outlet } from "react-router";

const Home: FC<{
  currentLocationCity: CityDetailsType;
}> = ({ currentLocationCity }) => {
  const [cityDetails, setCityDetails] =
    useState<CityDetailsType>(currentLocationCity);
  const { data, isLoading, isError } = useDailyDataPerCity(cityDetails.key);

  // remember that the initial page need to remember list of cities
  // every time city changes the city should add to the cache
  // when the user search for it again it takes the data from the cache
  if (isError) return <>error</>;

  return (
    <FlexBox className={styles.appContainer}>
      <Stack className={styles.dailyInfoContainer}>
        <SearchBar cityName={cityDetails.name} updateData={setCityDetails} />
        <DailyInfoContainer data={data} />
        <Typography variant="h2">{`${cityDetails.name}, ${cityDetails.country}`}</Typography>
      </Stack>
      <Stack
        className={styles.infoBoxesContainer}
        bgcolor={(theme: Theme) => theme.palette.common.grey}
      >
        <Tabs />
        <Outlet />
      </Stack>
    </FlexBox>
  );
};

export default Home;
