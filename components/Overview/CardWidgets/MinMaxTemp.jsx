import React from "react";
import { CardContent, Skeleton, Typography } from "@mui/material";
import { Avatar, Box, Card, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import DeviceThermostatRoundedIcon from "@mui/icons-material/DeviceThermostatRounded";

const MinMaxTemp = ({ value, title }) => {
  const icon =
    value >= 20 ? (
      <DeviceThermostatRoundedIcon color="primary" fontSize="large" />
    ) : (
      <AcUnitRoundedIcon color="primary" fontSize="large" />
    );
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        "&:hover": { background: grey[100] },
        backgroundColor: grey[50],
      }}
    >
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
    </Card>
  );
};

export default MinMaxTemp;
