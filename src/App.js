import React from "react";
import "./App.css";
import Vote from "./Vote";

function App() {
  return (
    <>
      <header>
        <h1>Vote for your favourite</h1>
      </header>
      <section className="vote-container">
        <Vote />
      </section>
    </>
  );
}

export default App;
