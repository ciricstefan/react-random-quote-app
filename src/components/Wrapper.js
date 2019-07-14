import React, { Component } from "react";
import Quote from "./Quote";
import Footer from "./Footer";

export default class Wrapper extends Component {
  state = {
    quote: "",
    author: ""
  };

  componentDidMount() {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div id="quote-box">
        <Quote />
        <Footer />
      </div>
    );
  }
}
