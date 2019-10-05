import React from "react";
import "./App.css";
import Vote from "./Vote";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Vote for your favourite</h1>
        </div>
      </header>
      <div className="container">
        <section className="vote-container">
          <Vote />
        </section>
      </div>
    </>
  );
}

export default App;
