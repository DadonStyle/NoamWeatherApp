import { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import { getDateFromEpoch, getFormattedDateText } from "../../util/util";
import styles from "./DailyInfoContainer.module.css";
import WeatherImage from "../../components/WeatherImage/WeatherImage";
import PagesLoader from "../../components/Loader/PagesLoader/PagesLoader";

const DailyInfoContainer: FC<{ data: any; isLoading: boolean }> = ({
  data,
  isLoading,
}) => {
  if (isLoading || !data) return <PagesLoader />;

  return (
    <FlexBox className={styles.dailyInfoContainer}>
      {data?.WeatherIcon && <WeatherImage iconIndex={data.WeatherIcon} />}
      <FlexBox gap="0.2rem">
        <Typography variant="h1">{data.Temperature.Metric.Value}°</Typography>
        <Typography variant="h2">{data.Temperature.Metric.Unit}</Typography>
      </FlexBox>
      <Typography>{data.WeatherText}</Typography>
      <Box
        bgcolor={(theme: Theme) => theme.palette.common.grey}
        className={styles.divider}
      />
      <FlexBox className={styles.dateInfoContainer}>
        <Typography>{getDateFromEpoch(data.EpochTime)}</Typography>
        <Typography>{getFormattedDateText(data.EpochTime)}</Typography>
        <Typography>{data.IsDayTime ? "Day" : "Night"}</Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default DailyInfoContainer;
