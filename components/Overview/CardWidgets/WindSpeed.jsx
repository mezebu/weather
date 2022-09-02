import React from "react";
import { CardContent, Skeleton, Typography } from "@mui/material";
import { Avatar, Box, Card, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import { OverviewCard } from "../styles";

const WindSpeed = ({ value }) => {
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
          <AirRoundedIcon color="primary" fontSize="large" />

          <Box sx={{ ml: 5 }}>
            <Stack>
              <Typography color="text.secondary" variant="subtitle2">
                Wind Speed
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {Math.round(value)}
                <Typography component="span" fontWeight={500}>
                  {" "}
                  Km/h
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </OverviewCard>
  );
};

export default WindSpeed;
