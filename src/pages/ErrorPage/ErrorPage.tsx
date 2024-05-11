import { useRouteError, ErrorResponse } from "react-router";
import { Typography } from "@mui/material";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error: ErrorResponse = useRouteError() as ErrorResponse;

  return (
    <FlexBox className={styles.errorPageContainer}>
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, the Beach is close today</Typography>
      <Typography>Api limit exceed :(</Typography>
      <Typography>Contact me to get a new api key.</Typography>
      <Typography>{error.statusText || error.data}</Typography>
    </FlexBox>
  );
};

export default ErrorPage;
