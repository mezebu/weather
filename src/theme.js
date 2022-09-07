import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
      paper: "#e4e5f1",
    },
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

export default theme;
