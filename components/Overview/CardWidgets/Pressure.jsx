import React from "react";
import { CardContent, Skeleton, Typography } from "@mui/material";
import { Box, Card, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import CompressRoundedIcon from "@mui/icons-material/CompressRounded";
import { OverviewCard } from "../styles";

const Pressure = ({ value }) => {
  const icon =
    value >= 1013 ? (
      <ArrowDropUpRoundedIcon color="primary" />
    ) : (
      <ArrowDropDownRoundedIcon color="error" />
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
          <CompressRoundedIcon color="primary" fontSize="large" />

          <Box sx={{ ml: 5 }}>
            <Stack>
              <Typography color="text.secondary" variant="subtitle2">
                Pressure
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {value}
                <Typography component="span" fontWeight={500}>
                  {" "}
                  mb
                </Typography>
                {icon}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </OverviewCard>
  );
};

export default Pressure;
