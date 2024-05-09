import { FlexBox } from "./styledComponents/FlexBox/FlexBox";
import styles from "./App.module.css";
import { Stack } from "@mui/material";
import useFetchDailyDataPerCity from "./queries/useFetchDailyDataPerCity";

const App = () => {
  //  const { data } = useFetchDailyDataPerCity("");
  return (
    <FlexBox className={styles.appContainer}>
      <Stack className={styles.dailyInfoContainer}>
        {/* search */}
        {/* daily data */}
        {/* city name */}
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

export default App;
