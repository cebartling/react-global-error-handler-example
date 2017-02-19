import React, {Component} from "react";

class WelcomeView extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props, context) {
        super(props, context);
    }

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
            <div className="welcome">
                <h1>Welcome</h1>
            </div>
        );
    }
}

export default WelcomeView;
