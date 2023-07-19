import { Component } from "react";
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  default: "default",
  inverted: "inverted",
  google: "google-sign-in"
};

class Button extends Component {
  render() {
    const { children, buttonType, otherProps } = this.props;

    return (
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}

export default Button;
