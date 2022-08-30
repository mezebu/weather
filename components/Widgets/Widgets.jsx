import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import CardWidgets from "./CardWidgets";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import moment from "moment";

const Widgets = ({ data }) => {
  // console.log(data);

  const { id, name, main, sys, weather, timezone, dt } = data;

  const widgetDetails = {
    icons: {
      sunRise: <WbSunnyRoundedIcon />,
      sunSet: <WbTwilightRoundedIcon />,
    },
    title: {
      sunRise: "Sunrise",
      sunSet: "Sunset",
    },
    weatherData: {
      sunRise: sys?.sunrise,
      sunSet: sys?.sunset,
    },
  };

  const { icons, title, weatherData } = widgetDetails;

  const dateTime = moment.unix(dt).utc().add(timezone, "s").format("LT");

  return (
    <Container>
      {id && (
        <Box sx={{ py: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography color="text.secondary" variant="subtitle2">
                {sys?.country}
              </Typography>
            </Box>
            <Typography variant="subtitle2">{dateTime}</Typography>
          </Box>
          <Box
            sx={{
              my: 5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Avatar
                alt={weather[0]?.description}
                src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                sx={{ width: 65, height: 65 }}
              />
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                {Math.round(main?.temp)}&deg;C
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">{weather[0]?.main}</Typography>
              <Typography>{weather[0]?.description}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Sunrise & Sunset
            </Typography>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={6} xs={12}>
                <CardWidgets
                  icon={icons.sunRise}
                  title={title.sunRise}
                  weather={weatherData.sunRise}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={6} xs={12}>
                <CardWidgets
                  icon={icons.sunSet}
                  title={title.sunSet}
                  weather={weatherData.sunSet}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Widgets;
