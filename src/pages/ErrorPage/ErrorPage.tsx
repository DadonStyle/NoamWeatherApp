import { useRouteError, ErrorResponse } from "react-router";
import { FlexContainer } from "../../components/StyledComponents/FlexContainer/FlexContainer";
import { Typography } from "@mui/material";

const ErrorPage = () => {
  const error: ErrorResponse = useRouteError() as ErrorResponse;

  return (
    <FlexContainer id="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>{error.statusText || error.data}</Typography>
    </FlexContainer>
  );
};

export default ErrorPage;
