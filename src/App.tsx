import React from "react";
import "./App.css";
import Beagle from "./images/Beagle.png";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> Here is a Header! </h1>
            <img src={Beagle} alt="Photo of a dog!" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Karen Sousa. Hello World.
            </p>
            <ul>
                <li> Thing1 </li>
                <li> Thing2 </li>
                <li> Thing3 </li>
            </ul>
            <div className="Button">
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>Second column.</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
