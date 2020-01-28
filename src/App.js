import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { CssBaseline } from "@material-ui/core";


export default class App extends Component {

  render() {


    return (
      <CssBaseline>

        <div style={{ width: "90%", margin: "auto" }}>
          <Header />
          <Banner />
          <Home />
          <Footer />
        </div>

      </CssBaseline>

    );
  }
}
