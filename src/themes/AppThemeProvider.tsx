import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { ReactNode } from "react";

// enable custom button variant declarations
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
  }
}

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const theme = responsiveFontSizes(
    createTheme({
      // preferred to use the default mui platte
      typography: {
        h1: {},
      },
      components: {
        MuiButton: {
          variants: [
            {
              props: { variant: "secondary" },
              style: {},
            },
          ],
          styleOverrides: {
            root: {
              "&:hover": {},
              "&:disabled": {},
            },
          },
        },
      },
    })
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
