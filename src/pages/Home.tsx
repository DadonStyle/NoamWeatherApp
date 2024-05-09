import { Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { FlexBox } from "../styledComponents/FlexBox/FlexBox";
import Search from "../modules/Search";
import useDailyDataPerCity from "../queries/useDailyDataPerCity";
import { CityDetailsType } from "../types/WeatherTypes";
import styles from "./Home.module.css";

const Home: FC<{
  currentLocationCity: CityDetailsType;
}> = ({ currentLocationCity }) => {
  const [cityDetails, setCityDetails] =
    useState<CityDetailsType>(currentLocationCity);
  const { data, isLoading } = useDailyDataPerCity(cityDetails.key); // do not give city name back

  if (isLoading || !data) return <>Loading</>;
  console.log("cityDetails", cityDetails);
  return (
    <FlexBox className={styles.appContainer}>
      <Stack className={styles.dailyInfoContainer}>
        <Search cityName={""} updateData={setCityDetails} />
        <img
          width="200px"
          height="200px"
          src={`https://www.accuweather.com/images/weathericons/${data?.WeatherIcon}.svg`}
        />
        <Typography>{cityDetails.name}</Typography>
      </Stack>
      <Stack
        className={styles.infoBoxesContainer}
        bgcolor="colors.greyBackground"
      >
        {/* navigation button */}
        {/* info boxes */}
      </Stack>
    </FlexBox>
  );
};

export default Home;
