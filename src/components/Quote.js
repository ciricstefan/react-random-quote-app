import React from "react";

export default function Quote({ quote, author }) {
  return (
    <React.Fragment>
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <div>
        <a href="#" id="new-quote">
          Get A New Quote
        </a>
        <a href="#" id="tweet-quote">
          Tweet This Awesome Quote
        </a>
      </div>
    </React.Fragment>
  );
}
