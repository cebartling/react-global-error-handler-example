import React, {Component} from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import GenerateTopLevelErrorView from "./components/generate_errors/GenerateTopLevelErrorView";
import GenerateNestedErrorView from "./components/generate_errors/GenerateNestedErrorView";
import MainLayout from "./components/layout/MainLayout";
import WelcomeView from "./components/welcome/WelcomeView";

class App extends Component {

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
        return (
            <Router history={browserHistory}>
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={WelcomeView}></IndexRoute>
                    <Route path="/topLevelError" component={GenerateTopLevelErrorView}/>
                    <Route path="/nestedError" component={GenerateNestedErrorView}/>
                </Route>
            </Router>
        );
    }
}

export default App;
