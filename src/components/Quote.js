import React from "react";

export default function Quote({ quote, author, getRandomQuote }) {
  return (
    <React.Fragment>
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <div>
        <button
          id="new-quote"
          onClick={() => {
            getRandomQuote();
          }}
        >
          Get A New Quote
        </button>
        <a
          href={
            "https://twitter.com/intent/tweet?text=" +
            quote +
            " - " +
            author +
            "&hashtags=randomquoteday"
          }
          id="tweet-quote"
        >
          Tweet This Awesome Quote
        </a>
      </div>
    </React.Fragment>
  );
}
