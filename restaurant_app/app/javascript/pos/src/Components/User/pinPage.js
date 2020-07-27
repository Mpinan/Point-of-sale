import React from "react";
import PinInput from "react-pin-input";
import MainPage from "../mainpage";

class Pin extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    value: "",
    pin: "12345",
  };

  onChange = (value) => {
    this.setState({ value });
  };

  onClear = () => {
    this.setState({
      value: "",
    });
    console.log(this.state.value);
    console.log(this.props);
    if (this.state.value === this.state.pin) {
      console.log(this.props);
      this.props.redirect();
    } else {
      console.log("wrong pin");
    }
  };

  render() {
    return (
      <div className="app">
        <PinInput
          length={5}
          focus
          required
          // disabled
          secret
          ref={(p) => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
        />
        <button onClick={this.onClear}>Clear</button>
      </div>
    );
  }
}
export default Pin;
