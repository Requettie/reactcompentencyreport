import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";

class Item extends Component {
  state = {};

  render() {
    return (
      <div className="item">
        <QuantityPicker
          onValueChange={this.handleQuantityChange}
        ></QuantityPicker>

        <img src="https://picsum.photos/200/300" alt="item" />

        <h6>{this.props.prod.title}</h6>

        <div className="prices">
          <label>Total: $120.93</label>
          <label>Price: $12.09</label>
        </div>

        <h1>Item A</h1>

        <button className="btn btn-sm btn-primary">Add</button>
      </div>
    );
  }
  getTotal = () => {
    let total = this.props.prod.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (quantity) => {
    console.log("Quantity changed", quantity);
  };
}

export default Item;
