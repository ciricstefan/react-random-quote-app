import React from "react";

export default function Quote({ quote, author, getRandomQuote }) {
  return (
    <div id="quote-box">
      <div>
        <p id="text">
          <span>"</span>
          {quote}
          <span>"</span>
        </p>
        <p id="author">
          <span>Author:</span> {author}
        </p>
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
            <button>Tweet This Awesome Quote</button>
          </a>
        </div>
      </div>
    </div>
  );
}
