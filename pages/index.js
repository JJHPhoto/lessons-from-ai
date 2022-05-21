import Head from "next/head";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setUserInput("");
  }

  return (
    <div>
      <h3>Find out about early empires!</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Ask a question about ancient empires"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input type="submit" value="Find out" />
      </form>
      <div>{result}</div>
    </div>
  );
}
