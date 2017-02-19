import React, {Component} from "react";
import wrapReactComponentMethodsTryCatch from "../../WrapReactComponentMethodsTryCatch";

@wrapReactComponentMethodsTryCatch
class GenerateTopLevelErrorView extends Component {

    static propTypes = {};

    static defaultProps = {};

    // constructor(props, context) {
    //     super(props, context);
    // }
    //
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
        return nextProps.id !== this.props.id;

    }

    componentWillUpdate(nextProps, nextState) {
        throw new Error('This is a test.');
    }

    render() {
        throw new Error('This is a test.');

        return (
            <div>
                <h1>top level</h1>
            </div>
        );
    }
}

export default GenerateTopLevelErrorView;
