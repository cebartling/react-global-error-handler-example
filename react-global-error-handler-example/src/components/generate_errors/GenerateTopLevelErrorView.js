import React, {Component} from "react";

class GenerateTopLevelErrorView extends Component {

    static propTypes = {};

    static defaultProps = {};

    // constructor(props, context) {
    //     super(props, context);
    // }
    //
    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.id !== this.props.id;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    render() {
        return (
            <div>
                <h1>top level</h1>
            </div>
        );
    }
}

export default GenerateTopLevelErrorView;
