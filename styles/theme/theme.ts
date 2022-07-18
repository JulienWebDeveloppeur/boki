import { createTheme } from "@mui/material/styles";

const primary = "#FFDEB4";
const secondary = "#FFF9CA";
const secondaryLight = "#fffff";
const contrast = "#F5FFF9";
const contrastMedium = "#29302C";
const contrastDark = "#29302C";

export default createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryLight,
          color: contrastMedium,
          borderColor: contrastDark,
          paddingLeft: "2rem",
          paddingRight: "2rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "500",
          boxShadow: "none",
        },
        contained: {
          backgroundColor: `${primary} !important`,
        },
      },
    },
  },
  palette: {
    background: {
      default: secondary,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: contrast,
    },
  },
});
