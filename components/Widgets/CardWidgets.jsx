import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">well meaning and kindly.</Typography>
    </CardContent>
  </React.Fragment>
);

const CardWidgets = () => {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default CardWidgets;
