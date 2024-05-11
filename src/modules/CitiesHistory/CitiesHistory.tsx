import { CityDetailsType, outletStateInterface } from "../../types/types";
import { useOutletContext } from "react-router";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import InfoBox from "../../components/InfoBox/InfoBox";
import { IconButton, Theme, Typography } from "@mui/material";
import PagesLoader from "../../components/Loader/PagesLoader/PagesLoader";
import useCitiesHistoryLogic from "./hooks/useCitiesHistoryLogic";
import styles from "./CitiesHitory.module.css";
import LaunchIcon from "@mui/icons-material/Launch";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CitiesHistory = () => {
  const { cityDetails, setCityDetails }: outletStateInterface =
    useOutletContext();
  const { cityList, removeFunc } = useCitiesHistoryLogic(
    cityDetails || undefined
  );

  const handleOnCityClick = (cityDetails: CityDetailsType) =>
    setCityDetails(cityDetails);

  if (!Array.isArray(cityList))
    return (
      <FlexBox width="100%">
        <PagesLoader />
      </FlexBox>
    );

  if (!cityList) return <Typography>List is Empty!</Typography>;

  return (
    <FlexBox className={styles.citiesHistoryContainer}>
      {cityList.map((item: CityDetailsType) => (
        <FlexBox key={item.key} className={styles.citiesHistoryItem}>
          <InfoBox
            label={item.key}
            midValue={<Typography variant="h2">{item.name}</Typography>}
            bottomValue={<Typography>{item.country}</Typography>}
          />
          <IconButton
            className={styles.linkIcon}
            onClick={() => handleOnCityClick(item)}
          >
            <LaunchIcon
              className={styles.iconSize}
              sx={{ color: (theme: Theme) => theme.palette.common.white }}
            />
          </IconButton>
          <IconButton
            className={styles.deleteIcon}
            onClick={() => removeFunc(item.key)}
          >
            <DeleteOutlineIcon
              className={styles.iconSize}
              sx={{ color: (theme: Theme) => theme.palette.common.white }}
            />
          </IconButton>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default CitiesHistory;
