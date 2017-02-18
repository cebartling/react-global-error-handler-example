import React, {Component} from "react";
import {Navbar, Nav, NavItem, Jumbotron, Button} from "react-bootstrap";
import "./App.css";

class App extends Component {


    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React Global Error Handler Example</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Create error</NavItem>
                    </Nav>
                </Navbar>

                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
