import React from "react";
import { CardContent, Skeleton, Typography } from "@mui/material";
import { Box, Card, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import CompressRoundedIcon from "@mui/icons-material/CompressRounded";

const Pressure = ({ value, isLoading }) => {
  const icon =
    value >= 1013 ? (
      <ArrowDropUpRoundedIcon color="primary" />
    ) : (
      <ArrowDropDownRoundedIcon color="error" />
    );

  return (
    <Card
      elevation={0}
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
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <CompressRoundedIcon color="primary" fontSize="large" />
          )}

          <Box sx={{ ml: 5 }}>
            {isLoading ? (
              <Stack spacing={2}>
                <Skeleton variant="text" width={90} />
                <Skeleton variant="text" />
              </Stack>
            ) : (
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
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Pressure;
