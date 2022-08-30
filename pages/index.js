import React from "react";
import { Grid, Box } from "@mui/material";

import Head from "next/head";
import Overview from "../components/Overview/Overview";
import Widgets from "../components/Widgets/Widgets";

import useOpenWeather from "../api/useOpenWeather";

export default function Index() {
  const { data, loading } = useOpenWeather(
    `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );

  return (
    <Box>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box component="main">
        <Grid container spacing={2}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Overview data={data} isLoading={loading} />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Widgets data={data} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
