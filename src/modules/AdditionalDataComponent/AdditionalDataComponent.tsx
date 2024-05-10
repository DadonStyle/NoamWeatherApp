import { FlexBox } from "../../components/StyledComponents/FlexBox/FlexBox";
import InfoBox from "../../components/InfoBox/InfoBox";
import { Theme, Typography } from "@mui/material";
import useDailyDataPerCity from "../../queries/useDailyDataPerCity";
import styles from "./AdditionalDataComponent.module.css";
import { useOutletContext } from "react-router";
import { outletStateInterface } from "../../types/types";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import PagesLoader from "../../components/Loader/PagesLoader/PagesLoader";

const AdditionalDataComponent = () => {
  const { cityDetails }: outletStateInterface = useOutletContext();
  const { data, isLoading } = useDailyDataPerCity(cityDetails?.key || "");

  if (isLoading || !data)
    return (
      <FlexBox width="100%">
        <PagesLoader />
      </FlexBox>
    );

  return (
    <FlexBox className={styles.additionalDataContainer}>
      <FlexBox className={styles.additionalDataRowContainer}> 
        <InfoBox
          label="Wind"
          midValue={
            <FlexBox className={styles.additionalDataItemContainer}>
              <Typography variant="h2">
                {data.Wind.Speed.Metric.Value}
              </Typography>
              <Typography variant="h2">
                {data.Wind.Speed.Metric.Unit}
              </Typography>
            </FlexBox>
          }
        />
        <InfoBox
          label="Humidity"
          midValue={
            <Typography variant="h2">{data.IndoorRelativeHumidity}%</Typography>
          }
        />
        <InfoBox
          label="Real Feel"
          midValue={
            <FlexBox className={styles.additionalDataItemContainer}>
              <Typography variant="h2">
                {data.RealFeelTemperature.Metric.Value}°
              </Typography>
              <Typography variant="h2">
                {data.RealFeelTemperature.Metric.Unit}
              </Typography>
            </FlexBox>
          }
        />
      </FlexBox>
      <FlexBox className={styles.additionalDataRowContainer}>
        <InfoBox
          label="UV Index"
          midValue={<Typography variant="h2">{data.UVIndex}</Typography>}
          bottomValue={<Typography>{data.UVIndexText}</Typography>}
        />
        <InfoBox
          label="Pressure"
          midValue={
            <FlexBox className={styles.additionalDataItemContainer}>
              <Typography variant="h2">{data.Pressure.Metric.Value}</Typography>
              <Typography variant="h2">{data.Pressure.Metric.Unit}</Typography>
            </FlexBox>
          }
          bottomValue={
            <Typography>{data.PressureTendency.LocalizedText}</Typography>
          }
        />
        <InfoBox
          label="Rain"
          midValue={
            <FlexBox className={styles.additionalDataItemContainer}>
              <Typography variant="h2">
                {data.Precip1hr.Metric.Value}
              </Typography>
              <Typography variant="h2">{data.Precip1hr.Metric.Unit}</Typography>
            </FlexBox>
          }
          bottomValue={<Typography>Last hour</Typography>}
        />
      </FlexBox>
      <FlexBox className={styles.additionalDataRowContainer}>
        <InfoBox
          label="24h Temperature"
          midValue={
            <FlexBox className={styles.temperatureHistoryContainer}>
              <FlexBox className={styles.additionalDataItemContainer}>
                <NorthOutlinedIcon // represents max
                  sx={{
                    color: (theme: Theme) => theme.palette.common.lightRed,
                  }}
                />
                <Typography variant="h3">
                  {data.TemperatureSummary.Past24HourRange.Maximum.Metric.Value}
                  °
                </Typography>
                <Typography variant="h3">
                  {data.TemperatureSummary.Past24HourRange.Maximum.Metric.Unit}
                </Typography>
              </FlexBox>
              <FlexBox className={styles.additionalDataItemContainer}>
                <NorthOutlinedIcon // represents min
                  sx={{
                    color: (theme: Theme) => theme.palette.common.lightGreen,
                    rotate: "180deg",
                  }}
                />
                <Typography variant="h3">
                  {data.TemperatureSummary.Past24HourRange.Minimum.Metric.Value}
                  °
                </Typography>
                <Typography variant="h3">
                  {data.TemperatureSummary.Past24HourRange.Minimum.Metric.Unit}
                </Typography>
              </FlexBox>
            </FlexBox>
          }
        />
        <InfoBox
          label="Cloud Cover"
          midValue={<Typography variant="h2">{data.CloudCover}%</Typography>}
        />
        <InfoBox
          label="Visibility"
          midValue={
            <FlexBox className={styles.additionalDataItemContainer}>
              <Typography variant="h2">
                {data.Visibility.Metric.Value}
              </Typography>
              <Typography variant="h2">
                {data.Visibility.Metric.Unit}
              </Typography>
            </FlexBox>
          }
        />
      </FlexBox>
    </FlexBox>
  );
};

export default AdditionalDataComponent;
