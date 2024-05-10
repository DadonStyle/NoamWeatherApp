import { Typography } from "@mui/material";
import useForecastPerCity from "../../queries/useForecastPerCity";
import { outletStateInterface } from "../../types/types";
import { useOutletContext } from "react-router";
import InfoBox from "../../components/InfoBox/InfoBox";
import { getDateFromEpoch } from "../../util/util";
import WeatherImage from "../../components/WeatherImage/WeatherImage";
import { FlexBox } from "../../components/StyledComponents/FlexBox/FlexBox";
import styles from "./ForecastComponent.module.css";
import PagesLoader from "../../components/Loader/PagesLoader/PagesLoader";

const ForecastComponent = () => {
  const { cityDetails }: outletStateInterface = useOutletContext();
  const { data, isLoading } = useForecastPerCity(cityDetails?.key || "");

  if (isLoading || !data)
    return (
      <FlexBox width="100%">
        <PagesLoader />
      </FlexBox>
    );

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
              bottomValue={<Typography>{forecast?.Day.IconPhrase}</Typography>}
            />
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default ForecastComponent;
