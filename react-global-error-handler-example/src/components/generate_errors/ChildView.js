import React, {Component} from "react";
import wrapReactComponentMethodsTryCatch from "../../WrapReactComponentMethodsTryCatch";

@wrapReactComponentMethodsTryCatch
class ChildView extends Component {

    componentWillMount() {
        throw new Error('This is a test.');
    }

    componentDidMount() {
        throw new Error('This is a test.');
    }

    componentWillReceiveProps(nextProps) {
        throw new Error('This is a test.');
    }

    shouldComponentUpdate(nextProps, nextState) {
        throw new Error('This is a test.');

    }

    componentWillUpdate(nextProps, nextState) {
        throw new Error('This is a test.');
    }

    render() {
        throw new Error('This is a test.');
    }

}

export default ChildView;
