import React from "react";
import "./App.css";
import Vote from "./Vote";

const OPTIONS = [
  {
    label: "Answer A",
    value: "a"
  },
  {
    label: "Answer B",
    value: "b"
  },
  {
    label: "Answer C",
    value: "c"
  },
  {
    label: "Answer D",
    value: "d"
  }
];

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Submit your answer</h1>
        </div>
      </header>
      <div className="container">
        <section className="vote-container">
          <Vote options={OPTIONS} />
        </section>
      </div>
    </>
  );
}

export default App;
