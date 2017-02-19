import React, {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "./App.css";
import {ToastContainer, ToastMessage} from "react-toastr";
import {withRouter} from "react-router";


class MainLayout extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleClickTopLevelError = this.handleClickTopLevelError.bind(this);
        this.handleClickNestedError = this.handleClickNestedError.bind(this);
    }

    handleClickTopLevelError(e) {
        e.preventDefault();
        this.props.router.push('/topLevelError');
    }

    handleClickNestedError(e) {
        e.preventDefault();
        this.props.router.push('/nestedError');
    }


    render() {
        let ToastMessageFactory = React.createFactory(ToastMessage.animation);

        return (
            <div className="App">
                <ToastContainer ref="container"
                                toastMessageFactory={ToastMessageFactory}
                                className="toast-top-center"/>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">React Global Error Handler Example</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#" onClick={this.handleClickTopLevelError}>Top level errors</NavItem>
                        <NavItem eventKey={2} href="#" onClick={this.handleClickNestedError}>Nested errors</NavItem>
                    </Nav>
                </Navbar>

                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(MainLayout, { withRef: true });
