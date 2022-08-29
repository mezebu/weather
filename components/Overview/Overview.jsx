import React from "react";
import { Box, ButtonBase, Container, Divider, Toolbar } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import moment from "moment";
import {
  LocationIcon,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ThemeIcon,
} from "./styles";
import { red } from "@mui/material/colors";
import CardWidgets from "./CardWidgets/CardWidgets";

const initialValues = {
  windSpeed: "Wind Speed",
  rainChance: "Chance of rain",
  pressure: "Pressure",
  uvIndex: "Uv Index",
};

const Overview = ({ handleSubmit, setQuery, query, fetchData }) => {
  const currentYear = moment().format("MMMM YYYY");
  const currentDate = moment().format("dddd MMM Do YYYY");

  return (
    <Box sx={{ background: "#f2f6f7", height: "100vh" }}>
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
          <Search onSubmit={handleSubmit}>
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
          <ButtonBase component="div" onClick={fetchData}>
            <LocationIcon>
              <LocationOnIcon sx={{ fontSize: 20, color: red[400] }} />
            </LocationIcon>
          </ButtonBase>
          <ButtonBase component="div" sx={{ ml: 1 }}>
            <ThemeIcon>
              <LightModeRoundedIcon sx={{ fontSize: 20 }} />
            </ThemeIcon>
          </ButtonBase>
        </Toolbar>
      </Container>
      <Divider />
      <Box>
        <Container>
          <Box sx={{ py: 2, px: 2 }}>
            <Typography variant="button">Today Overview</Typography>
          </Box>
          <Grid container spacing={2} sx={{ px: 2 }}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <CardWidgets type={initialValues.windSpeed} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <CardWidgets type={initialValues.rainChance} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <CardWidgets type={initialValues.pressure} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <CardWidgets type={initialValues.uvIndex} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Overview;
