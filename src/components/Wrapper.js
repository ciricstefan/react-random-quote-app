import React, { Component } from "react";
import Quote from "./Quote";
import Footer from "./Footer";

export default class Wrapper extends Component {
  render() {
    return (
      <div id="quote-box">
        <Quote />
        <Footer />
      </div>
    );
  }
}
