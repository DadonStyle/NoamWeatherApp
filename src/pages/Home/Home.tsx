import { Stack, Theme, Typography } from "@mui/material";
import { FC, useState } from "react";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import SearchBar from "../../modules/SearchBar/SearchBar";
import useDailyDataPerCity from "../../queries/useDailyDataPerCity";
import { CityDetailsType } from "../../types/types";
import styles from "./Home.module.css";
import Tabs from "../../modules/Tabs/Tabs";
import DailyInfoContainer from "../../modules/DailyInfoContainer/DailyInfoContainer";
import { Outlet } from "react-router";
import PagesLoader from "../../components/Loader/PagesLoader/PagesLoader";

const Home: FC<{ defaultState: CityDetailsType }> = ({ defaultState }) => {
  const [cityDetails, setCityDetails] = useState<CityDetailsType>(defaultState);
  const { data, status } = useDailyDataPerCity(cityDetails.key);

  return (
    <FlexBox className={styles.appContainer}>
      <Stack className={styles.dailyInfoContainer}>
        <SearchBar updateData={setCityDetails} />
        {status === "pending" ? (
          <PagesLoader />
        ) : (
          <DailyInfoContainer data={data} />
        )}
        <Typography variant="h2">{`${cityDetails.name}, ${cityDetails.country}`}</Typography>
      </Stack>
      <Stack
        className={styles.infoBoxesContainer}
        bgcolor={(theme: Theme) => theme.palette.common.grey}
      >
        <Tabs />
        <Outlet
          context={{ cityDetails: cityDetails, setCityDetails: setCityDetails }}
        />
      </Stack>
    </FlexBox>
  );
};

export default Home;
