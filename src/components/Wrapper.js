import React, { Component } from "react";
import Quote from "./Quote";
import Footer from "./Footer";

export default class Wrapper extends Component {
  state = {
    quote: "",
    author: ""
  };

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author
        });
      })
      .catch(console.log);
  };

  render() {
    return (
      <React.Fragment>
        <Quote
          quote={this.state.quote}
          author={this.state.author}
          getRandomQuote={this.getRandomQuote}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
