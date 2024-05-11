import { Typography } from "@mui/material";
import useForecastPerCity from "../../queries/useForecastPerCity";
import { outletStateInterface } from "../../types/types";
import { useOutletContext } from "react-router";
import InfoBox from "../../components/InfoBox/InfoBox";
import { getDateFromEpoch } from "../../util/util";
import WeatherImage from "../../components/WeatherImage/WeatherImage";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import styles from "./ForecastComponent.module.css";
import PagesLoader from "../../components/Loader/PagesLoader/PagesLoader";

const ForecastComponent = () => {
  const { cityDetails }: outletStateInterface = useOutletContext();
  const { data, status, isError } = useForecastPerCity(cityDetails?.key || "");

  if (status === "pending")
    return (
      <FlexBox width="100%">
        <PagesLoader />
      </FlexBox>
    );
  if (!data || isError)
    return <Typography variant="h1">The beach is closed all week</Typography>;

  return (
    <FlexBox className={styles.forecastContainer}>
      <Typography variant="h1">{data?.Headline?.Text}</Typography>
      <FlexBox className={styles.forecastItemsContainer}>
        {data.DailyForecasts.map((forecast: any) => (
          <FlexBox key={forecast?.EpochDate} className={styles.forecastItem}>
            <InfoBox
              label={getDateFromEpoch(forecast?.EpochDate) || ""}
              midValue={
                <WeatherImage
                  iconIndex={forecast?.Day.Icon}
                  width="50px"
                  height="50px"
                />
              }
              bottomValue={
                <Typography sx={{ textAlign: "left" }}>
                  {forecast?.Day.IconPhrase}
                </Typography>
              }
              className={styles.infoBoxOverride}
            />
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default ForecastComponent;
