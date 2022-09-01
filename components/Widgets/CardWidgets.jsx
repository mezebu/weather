import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FlexAlignCenter, FlexSpaceBtw } from "../../styles/globalStyles";
import moment from "moment-timezone";

const CardWidgets = ({ icon, title, weather }) => {
  const dateTime = moment.unix(weather).format("LT");

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <FlexSpaceBtw>
            <FlexAlignCenter>
              <Box sx={{ mr: 3 }}>{icon}</Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {dateTime}
                </Typography>
              </Box>
            </FlexAlignCenter>
          </FlexSpaceBtw>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardWidgets;
