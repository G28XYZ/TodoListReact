import React, { Component } from "react";

class ItemAddFrom extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary" onClick={() => this.props.addItem("Hello")}>
          Add Item
        </button>
      </div>
    );
  }
}

export default ItemAddFrom;
