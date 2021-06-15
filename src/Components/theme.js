import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    common: {
      grey: "#fafaf5",
    },
    primary: {
      main: "#fafaf5",
    },
    secondary: {
      light: "rgba(0,0,0,.58)",
      main: "rgba(0,0,0,.64)",
    },
  },
  typography: {
    h5: {
      fontSize: "24px",
      fontWeight: "500",
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "0",
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: "0",
        },
      },
    },
  },
});
export default theme;
