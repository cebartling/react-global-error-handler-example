import React from "react";

export const config = {
    enabled: true,

    /**
     * Currently thif is configured to console.error a useful message if one of you
     * Component lifecycle methos throws an error. You can override the implementation
     * to integrate with you're own error logging.
     * @param  {[Object]} errorReport The report metadata including component, method, error thrown.
     * @return {[void]}
     */
    errorHandler: (errorReport) => {
        const qualifiedMethod = `${errorReport.component}.${errorReport.method}(${errorReport.arguments ? '...' : ''})`;
        console.error(`Error caught in ${qualifiedMethod} by wrapReactComponentMethodsTryCatch:`, errorReport.error);
    }
};

const RenderFunctionError = (props) => {
    console.info('Props:', props);
    const message = `Error thrown in ${props.componentName}.render function!`;

    return (
        <span className="text-danger">{message}</span>
    );
};


/**
 * Implementation of the try/catch wrapper.
 *
 * @param  {React.Component} component The ES6 React.Component.prototype that contains the React lifecycle method.
 * @param  {string} method The name of the method to wrap ex: "render"
 * @return {React.Component} Returns the same React.Component.prototype method wrapped with a try/catch functionality.
 */
const tryCatchDecorator = (component, method) => {
    let unsafe = component[method];

    component[method] = function () {
        if (!config.enabled) {
            return;
        }
        try {
            return unsafe.apply(this, arguments);
        } catch (err) {
            let errorReport = {
                component: component.constructor.name,
                method: method,
                props: this.props,
                error: err
            };
            if (arguments.length > 0) {
                errorReport.arguments = arguments;
            }
            let returnValue = config.errorHandler(errorReport);
            if (method === 'render') {
                return returnValue || React.createElement(RenderFunctionError,
                        {componentName: component.constructor.name});
            }
        }
    };

    if (method === "constructor") {
        console.log(component[method]);
    }
};

/**
 * Wraps each React.Component lifecycle method with a try/catch that enables easier development
 * diagnostics of errors throwin within each method.
 *
 * Methods wrapped include: `render, componentWillMount, componentDidMount, componentWillReceiveProps,
 * shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount`
 *
 * @param  {React.Component} ComponentConstructor The React.Component you want to wrap lifecycle
 * methods with a try/catch and error handler.
 * @return {void}                      [description]
 */
const wrapReactComponentMethodsTryCatch = (ComponentConstructor) => {
    [
        'render',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount'
    ].forEach((method) => {
        if (ComponentConstructor.prototype[method]) {
            tryCatchDecorator(ComponentConstructor.prototype, method);
        }
    });
};

export default wrapReactComponentMethodsTryCatch;
