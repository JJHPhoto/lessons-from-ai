import Head from "next/head";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import History from "./components/History";

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
    <Container>
      {/* <div> */}
      {/* <h3>Find out about early empires!</h3> */}
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formUserQuestion">
          <History />
          <Form.Control
            className="inputBox"
            type="text"
            placeholder="Ask me about some history!"
          />
          {/* <Form.Text className="text-muted">Learn about some.</Form.Text> */}
        </Form.Group>
        <Button varient="primary" type="submit">
          Ask
        </Button>
      </Form>
      {/* <form onSubmit={onSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Ask a question about ancient empires"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input type="submit" value="Find out" />
      </form> */}
      <div>{result}</div>
      {/* </div> */}
    </Container>
  );
}
