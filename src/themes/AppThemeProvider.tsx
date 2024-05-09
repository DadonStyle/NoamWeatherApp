import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { ReactNode } from "react";

// enable custom button variant declarations
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
  }
}

// add colors options by demand
interface ColorOptions {
  greyBackground?: string;
}

// enable custom colors declarations
declare module "@mui/material/styles" {
  interface Palette {
    colors: Palette["primary"];
  }
  interface PaletteOptions {
    colors: ColorOptions;
  }
}

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: "#ffffff",
        },
        secondary: {
          main: "#000000",
        },
        colors: {
          greyBackground: "#efefef",
        },
      },
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
