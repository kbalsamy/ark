import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
  IconButton
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ReactDOM from "react-dom";

const FormElement = () => (
  <Grid item xs={10}>
    <FormControl style={{ minWidth: "100% " }}>
      <Select
        labelId="dest-city"
        id="dest-city-select"
        //   onChange={handleChange}
      >
        <MenuItem disabled value="">
          Eneter baggage size and weight here
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Grid>
);

const BaggageBookingForm = () => {
  const addHandler = () => {
    console.log("adding");
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Grid container spacing={2} style={{ paddingBottom: "15px" }}>
        <Grid item xs={12} lg={6}>
          <FormControl style={{ minWidth: "80%", paddingRight: 20 }}>
            <InputLabel id="from-country">From country</InputLabel>
            <Select
              labelId="from-country"
              id="from-city-select"
              value="India"
              disabled
              //   onChange={handleChange}
            >
              <MenuItem value="India">India</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl style={{ minWidth: "80%" }}>
            <InputLabel id="from-city">From city</InputLabel>
            <Select
              labelId="from-city"
              id="from-city-select"
              value=""
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* Destination */}
      <Grid container spacing={2} style={{ paddingBottom: "15px" }}>
        <Grid item xs={12} lg={6}>
          <FormControl style={{ minWidth: "80%", paddingRight: 20 }}>
            <InputLabel id="dest-country">Destination country</InputLabel>
            <Select
              labelId="dest-country"
              id="dest-city-select"
              value=""
              disabled
              //   onChange={handleChange}
            >
              <MenuItem value="India">India</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl style={{ minWidth: "80%" }}>
            <InputLabel id="dest-city">Destination city</InputLabel>
            <Select
              labelId="dest-city"
              id="dest-city-select"
              value=""
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Typography variant="h6" align="center">
        Items details
      </Typography>
      <Grid container style={{ width: "80%", margin: "auto" }}>
        <Grid item xs={10}>
          <FormControl style={{ minWidth: "100% " }}>
            <Select
              labelId="dest-city"
              id="dest-city-select"
              //   onChange={handleChange}
            >
              <MenuItem disabled value="">
                Eneter baggage size and weight here
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={addHandler}>
            <AddBoxIcon />
          </IconButton>
        </Grid>
        <Grid container style={{ width: "80%", margin: "auto" }}>
          <Grid item className="bag"></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BaggageBookingForm;
