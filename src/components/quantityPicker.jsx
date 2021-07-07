import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    value: 1,
    name: "Reese",
  };

  render() {
    return (
      <div className="quantity-picker">
        <button onClick={this.increase} className="btn btn-sm btn-info">
          +
        </button>
        <label className="value">{this.state.value}</label>
        <button
          disabled="true" onClick={this.decrease}
          className="btn btn-sm btn-info"
        >
          -{" "}
        </button>
      </div>
    );
  }

  increase = () => {
    let val = this.state.value + 1;
    this.setState({ value: val });
    this.props.onValueChange(val);
  };

  decrease = () => {
    let val = this.state.value - 1;
    if (val > 0) {
      this.setState({ value: val });
      this.props.onValueChange(val);
    }
  };
}

export default QuantityPicker;
