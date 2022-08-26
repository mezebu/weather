import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import CardWidgets from "./CardWidgets";

const Widgets = () => {
  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Name of location
            </Typography>
            <Typography color="text.secondary" variant="subtitle2">
              Sub Location
            </Typography>
          </Box>
          <Typography>Time</Typography>
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
            <ThunderstormOutlinedIcon fontSize="large" />
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              12
            </Typography>
          </Box>
          <Typography>Description</Typography>
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Sunrise & Sunset
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={6} xs={12}>
              <CardWidgets />
            </Grid>
            <Grid item lg={12} md={12} sm={6} xs={12}>
              <CardWidgets />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Widgets;
