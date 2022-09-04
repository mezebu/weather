import React, { useState, useEffect } from "react";
import { useMediaQuery, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import PropTypes from "prop-types";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import ColorModeContext from "../src/ColorModeContext";
import darkTheme from "../src/darkTheme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const mode = localStorage.getItem("mode") === "true";
    // set mode
    console.log(`get localStore ${mode}`);
    setDarkMode(mode);
  }, []);

  const _setDarkMode = (newmode) => {
    console.log(`set localStore ${newmode}`);
    localStorage.setItem("mode", newmode);
    setDarkMode(newmode);
  };

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider
        value={{ darkMode, setDarkMode: _setDarkMode }}
      >
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
