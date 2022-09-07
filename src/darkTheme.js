import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
      default: "#1F1B24",
      paper: "#332940",
    },
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

export default darkTheme;
