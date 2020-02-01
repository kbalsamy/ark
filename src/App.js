import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <div style={{ height: "60px", background: "white" }}></div>
          <Header />
          <Footer />
        </div>
      );
    }
  }
);
