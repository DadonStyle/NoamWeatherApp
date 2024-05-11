import { CircularProgress, Theme } from "@mui/material";

const Loader = () => (
  <CircularProgress
    sx={{
      display: "flex",
      color: (theme: Theme) => theme.palette.common.purple,
    }}
  />
);

export default Loader;
