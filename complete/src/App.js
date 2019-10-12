import React from "react";
import VoteContainer from "./VoteContainer";
import "./App.css";

// Potential voting options
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

// Contain the application
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
          {/* Display the vote component */}
          <VoteContainer options={OPTIONS} />
        </section>
      </div>
    </>
  );
}

export default App;
