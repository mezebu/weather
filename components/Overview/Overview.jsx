import React from "react";
import { Box, ButtonBase, Container, Divider, Toolbar } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";
import {
  LocationIcon,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ThemeIcon,
} from "./styles";
import CardWidgets from "./CardWidgets/WindSpeed";
import WindSpeed from "./CardWidgets/WindSpeed";
import Pressure from "./CardWidgets/Pressure";
import MinMaxTemp from "./CardWidgets/MinMaxTemp";

const Overview = ({ data, isLoading }) => {
  const currentYear = moment().format("MMMM YYYY");
  const currentDate = moment().format("dddd MMM Do YYYY");

  const { main, wind } = data;

  const tempValues = {
    minTemp: { title: "Min Temp", value: main?.temp_min },
    maxTemp: { title: "Max Temp", value: main?.temp_max },
  };
  const { minTemp, maxTemp } = tempValues;

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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search location here"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <ButtonBase component="div">
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
              <WindSpeed value={wind?.speed} isLoading={isLoading} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Pressure value={main?.pressure} isLoading={isLoading} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <MinMaxTemp title={maxTemp.title} value={maxTemp.value} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <MinMaxTemp
                title={minTemp.title}
                value={minTemp.value}
                isLoading={isLoading}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Overview;
