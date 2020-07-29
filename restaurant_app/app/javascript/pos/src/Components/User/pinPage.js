import React from "react";
import PinInput from "react-pin-input";
import "../stylesheets/pinPage.scss";
import { Button } from "reactstrap";

class Pin extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    value: "",
    error: "",
  };

  onChange = (value) => {
    this.setState({ value });
  };

  onClear = () => {
    this.setState({
      value: "",
    });
    this.pin.clear();
  };

  onSubmit = () => {
    console.log(this.props.userPin);
    if (this.state.value === this.props.userPin) {
      this.props.redirect();
    } else {
      this.setState({ error: "Wrong pin" });
    }
  };

  render() {
    return (
      <div className="pinPage">
        <PinInput
          length={8}
          focus
          required
          secret
          ref={(p) => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
        />
        {this.state.error && (
          <div className="alert alert-danger error">{this.state.error}</div>
        )}
        <div className="button">
          <Button onClick={this.onSubmit}>Submit</Button>
          <Button onClick={this.onClear}>Clear</Button>
        </div>
      </div>
    );
  }
}
export default Pin;
