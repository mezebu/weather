import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Avatar, Box, Stack } from "@mui/material";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import DeviceThermostatRoundedIcon from "@mui/icons-material/DeviceThermostatRounded";
import { OverviewCard } from "../styles";

const MinMaxTemp = ({ value, title }) => {
  const icon =
    value >= 20 ? (
      <DeviceThermostatRoundedIcon color="primary" fontSize="large" />
    ) : (
      <AcUnitRoundedIcon color="primary" fontSize="large" />
    );
  return (
    <OverviewCard elevation={0} variant="outlined">
      <CardContent>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>{icon}</Box>

          <Box sx={{ ml: 5 }}>
            <Stack>
              <Typography color="text.secondary" variant="subtitle2">
                {title}
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {Math.round(value)}
                <Typography component="span" fontWeight={500}>
                  &deg;C
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </OverviewCard>
  );
};

export default MinMaxTemp;
