import React, { useState, useEffect } from "react";
import Card from "./Card";
const Body = () => {
  const [data, setData] = useState({});
  const [action, setAction] = useState(false);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((data) => data.json())
      .then((json) => setData(json));
  }, [action]);

  const newQuote = () => {
    setAction((prev) => !prev);
  };

  return (
    <main>

      <Card
        quote={data.content}
        newQuote={newQuote}
        author={data.author}
        />

    </main>
  );
};

export default Body;
