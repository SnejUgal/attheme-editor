import "./styles.scss";

import ErrorElement from "../error/component";
import React from "react";

class ErrorHandler extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      errors: [],
    };
  }

  handler = (event) => {
    let stack;

    const { error, reason, timeStamp } = event;

    if (reason) {
      ({ stack } = reason);
    } else {
      ({ stack } = error);
    }

    this.setState({
      errors: [
        ...this.state.errors,
        {
          stack,
          timeStamp,
        },
      ],
    });

    return true;
  };

  componentDidMount = () => {
    window.onerror = null;
    window.addEventListener(`error`, this.handler);
    window.addEventListener(`unhandledrejection`, this.handler);
  }

  render () {
    if (this.state.errors.length === 0) {
      return null;
    }

    const errorMessages = this.state.errors.map((error, index) => {
      const { stack, timeStamp } = error;
      const handleDismissed = () => {
        const errors = [...this.state.errors];

        errors.splice(index, 1);
        this.setState({
          errors,
        });
      };

      return <ErrorElement
        errorStack={stack}
        key={timeStamp}
        onDismissed={handleDismissed}
      />;
    });

    return errorMessages;
  }
}

export default ErrorHandler;
