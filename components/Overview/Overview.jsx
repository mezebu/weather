import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Container,
  Tooltip,
} from "@mui/material";
import { Divider, Toolbar, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import moment from "moment";
import axios from "axios";
import { useTheme } from "@mui/material/styles";

import { SearchIconWrapper, StyledInputBase, ThemeIcon } from "./styles";
import { LocationIcon, Search } from "./styles";
import WindSpeed from "./CardWidgets/WindSpeed";
import Pressure from "./CardWidgets/Pressure";
import MinMaxTemp from "./CardWidgets/MinMaxTemp";
import CardLoader from "./CardLoader";
import { FlexCenter } from "../../styles/globalStyles";
import { useContext } from "react";
import ColorModeContext from "../../src/ColorModeContext";

// prettier-ignore
const Overview = ({ data, isLoading, setData, setLoading, setUnit, unit, setError, error }) => {
  const [query, setQuery] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  
  const { main, wind } = data;
  const currentYear = moment().format("MMMM YYYY");
  const currentDate = moment().format("dddd MMM Do YYYY");
  const { darkMode, setDarkMode } = useContext(ColorModeContext);
  const theme = useTheme()
  const themeTitle = theme.palette.mode.charAt(0).toUpperCase() +
              theme.palette.mode.slice(1)


  const tempValues = {
    minTemp: { title: "Low", value: main?.temp_min },
    maxTemp: { title: "High", value: main?.temp_max },
  };
  const { minTemp, maxTemp } = tempValues;

  // Search for a user-specified city
  const handleSearch = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    e.preventDefault();
    setLoading(true);
    setQuery("");
    setError("")

    try {
      const { data } = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false)
    }
  };

  // Fetch the client's current location
  const fetchCoords = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

    setLoading(true);
    setError("")

    axios.get(url).then(({ data }) => {
      setLoading(false);
      setData(data);
    }).catch((error) => {
      setError(error.response.data.message);
      setLoading(false)
    });
  };

  // Change unit of measurement from celcius to fahrenheit
  const handleUnitChange = (unit) => {
    setUnit(unit);
  };

  // Switch between light and dark theme
  const toggleTheme = () => {
      setDarkMode(!darkMode);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, [lat, lon]);


  return (
    <Box
      sx={{ borderRight: { md: "1px solid grey" }, height: { md: "100vh" } }}
    >
      <Container>
        <Toolbar sx={{ py: 2 }}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              {currentYear}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {currentDate}
            </Typography>
          </Box>
          <Search onSubmit={handleSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search location here"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </Search>
          <ButtonBase component="div" onClick={fetchCoords}>
            <LocationIcon>
              <LocationOnIcon sx={{ fontSize: 20, color: red[400] }} />
            </LocationIcon>
          </ButtonBase>
          <Tooltip title={`${themeTitle} mode`}>
            <ButtonBase
              component="div"
              sx={{ ml: 1, mr: 1 }}
              onClick={toggleTheme}
            >
              <ThemeIcon>
                {theme.palette.mode === "dark" ? (
                  <NightsStayRoundedIcon sx={{ fontSize: 20 }} />
                ) : (
                  <LightModeRoundedIcon sx={{ fontSize: 20 }} />
                )}
              </ThemeIcon>
            </ButtonBase>
          </Tooltip>

          <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={() => handleUnitChange("metric")}>&deg;C</Button>
            <Button onClick={() => handleUnitChange("imperial")}>&deg;F</Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
      <Divider />
      <Box>
        <Container>
          <Box sx={{ py: 2, px: 2 }}>
            <Typography variant="button">Today Overview</Typography>
          </Box>
          {error ? (
            <FlexCenter sx={{ height: "70vh" }}>
              <Typography variant="button">{error}</Typography>
            </FlexCenter>
          ) : (
            <>
              <Grid container spacing={2} sx={{ px: 2 }}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  {isLoading ? (
                    <CardLoader />
                  ) : (
                    <WindSpeed value={wind?.speed} />
                  )}
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  {isLoading ? (
                    <CardLoader />
                  ) : (
                    <Pressure value={main?.pressure} />
                  )}
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  {isLoading ? (
                    <CardLoader />
                  ) : (
                    <MinMaxTemp title={maxTemp.title} value={maxTemp.value} />
                  )}
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  {isLoading ? (
                    <CardLoader />
                  ) : (
                    <MinMaxTemp title={minTemp.title} value={minTemp.value} />
                  )}
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Overview;

Overview.propType = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  setData: PropTypes.func.isRequired,
  setLoading: PropTypes.func,
  setUnit: PropTypes.func,
  unit: PropTypes.string,
  error: PropTypes.bool,
  setError: PropTypes.func,
};
