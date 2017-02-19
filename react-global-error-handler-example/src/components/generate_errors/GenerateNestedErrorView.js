import React, {Component} from "react";
import ChildView from "./ChildView";

class GenerateNestedErrorView extends Component {

    render() {
        return (
            <div>
                <h1>Nested child components throwing errors</h1>
                <ul>
                    <li><ChildView/></li>
                    <li><ChildView/></li>
                    <li><ChildView/></li>
                    <li><ChildView/></li>
                </ul>
            </div>
        );
    }
}

export default GenerateNestedErrorView;
