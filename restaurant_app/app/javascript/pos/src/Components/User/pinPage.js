import React from "react";
import PinInput from "react-pin-input";

class Pin extends React.PureComponent {
    state = {
        value: "",
        pin: "12345"
      };
    
      onChange = value => {
        this.setState({ value });
      };
    
      onClear = () => {
        this.setState({
          value: ""
        });
        console.log(this.state.value);
        if (this.state.value === this.state.pin) {
          this.pin.clear();
        } else {
          console.log("wrong pin");
        }
      };
    
      render() {
        const { value } = this.state;
        return (
          <div className="app">
            <PinInput
              length={5}
              focus
              // disabled
              secret
              ref={p => (this.pin = p)}
              type="numeric"
              onChange={this.onChange}
            />
            <div>{value}</div>
            <button onClick={this.onClear}>Clear</button>
          </div>
        );
      }
}
export default Pin;