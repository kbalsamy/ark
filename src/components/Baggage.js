import React from "react";
import {
  Paper,
  Grid,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button
} from "@material-ui/core";
import BaggaeBookingForm from "./BaggaeForm";
import BaggageBookingForm from "./BaggaeForm";

const Baggage = () => {
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <Typography paragraph align="justify">
            At World Baggage we know that your textbooks, computers, clothes,
            souvenirs and other personal items can literally weigh a tonne. All
            airlines strictly enforce the amount of checked baggage and carry-on
            luggage you can travel with internationally these days. All baggage
            in excess of your 'free' baggage allowance will incur additional
            charges. Don't get stuck at the airport having to pay the airline's
            excess baggage charges – use World Baggage, the excess baggage
            specialists! At World Baggage, we've taken the pain and stress out
            of sending your unaccompanied baggage around the World. There are no
            'check in' queues, no 'oversize' restrictions, no unexpected
            charges, or last minute repacking of your suitcase at the airport
            check in counter. More importantly you don't have to wait to get a
            quote, make a booking, or track your shipment. We can even pick up
            your excess luggage straight from your door.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div style={{ background: "grey" }}>
            <Typography>link</Typography>
            <Typography>link</Typography>
            <Typography>link</Typography>
            <Typography>link</Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Get instant Quote
          </Typography>
          <BaggageBookingForm />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Baggage;
