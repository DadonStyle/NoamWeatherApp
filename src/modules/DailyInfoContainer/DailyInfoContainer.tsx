import { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { FlexContainer } from "../../components/StyledComponents/FlexContainer/FlexContainer";
import { FlexBox } from "../../components/StyledComponents/FlexBox/FlexBox";
import { getDateFromEpoch, getFormattedDateText } from "../../util/util";
import styles from "./DailyInfoContainer.module.css";

const DailyInfoContainer: FC<{ data: any }> = ({ data }) => {
  if (!data) return <>LoadingInfo</>;

  return (
    <FlexContainer className={styles.dailyInfoContainer}>
      {data?.WeatherIcon && (
        <img
          width="200px"
          height="200px"
          src={`https://www.accuweather.com/images/weathericons/${data?.WeatherIcon}.svg`}
        />
      )}
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
    </FlexContainer>
  );
};

export default DailyInfoContainer;
