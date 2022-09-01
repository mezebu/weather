import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

import Head from "next/head";
import Overview from "../components/Overview/Overview";
import Widgets from "../components/Widgets/Widgets";
import Footer from "../components/Footer/Footer";

export default function Index() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState("");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=${unit}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

    let cleanUp = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setData({});

        const { data } = await axios.get(url);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error.response.data.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      cleanUp = true;
    };
  }, [unit]);

  return (
    <Box>
      <Head>
        <title>Henry&apos;s Weather App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box component="main">
        <Grid container spacing={2}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Overview
              data={data}
              isLoading={loading}
              setData={setData}
              setLoading={setLoading}
              setUnit={setUnit}
              unit={unit}
              setError={setError}
              error={error}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Widgets data={data} error={error} unit={unit} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
