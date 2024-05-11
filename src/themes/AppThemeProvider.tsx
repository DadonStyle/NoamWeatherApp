import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { ReactNode } from "react";

// enable custom button variant declarations
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    dropdown: true;
  }
}

// add color by demand
import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    black: string;
    white: string;
    grey: string;
    purple: string;
    lightRed: string;
    lightGreen: string;
  }
}

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  let theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
    },
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: { main: "#ffffff" },
      common: {
        black: "#000000",
        white: "#ffffff",
        grey: "#efefef",
        purple: "#748cf1",
        lightRed: "#faacac",
        lightGreen: "#b0fed5",
      },
    },
  });
  // theme composition is necessary for the components to have access to the platte
  theme = responsiveFontSizes(
    createTheme(theme, {
      typography: {
        h1: {
          fontSize: "50px",
          fontWeight: "500",
        },
        h2: {
          fontSize: "40px",
          fontWeight: "500",
        },
        h3: {
          fontSize: "30px",
          fontWeight: "500",
        },
        body1: {
          // default variant
          fontSize: "20px",
          fontWeight: "400",
        },
      },
      components: {
        MuiButton: {
          variants: [
            {
              props: { variant: "dropdown" },
              style: {
                width: "100%",
                height: "100%",
                color: theme.palette.primary.main,
                display: "flex",
                justifyContent: "flex-start",
              },
            },
          ],
        },
      },
    })
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
