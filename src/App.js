import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      width: "95%",
      margin: "auto"
    }
  }
});

export default withStyles(styles)(
  class App extends Component {
    render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <Header />
          <Banner />
          <Home />
          <Footer />
        </div>
      );
    }
  }
);
