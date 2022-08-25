import React from "react";
import Box from "@mui/material/Box";
import Head from "next/head";
import { Button, Grid } from "@mui/material";
import Overview from "../components/Overview/Overview";
import Widgets from "../components/Widgets/Widgets";

export default function Index() {
  return (
    <Box>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box component="main">
        <Grid container spacing={1}>
          <Grid item lg={8} md={8} sm={12}>
            <Overview />
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <Widgets />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
