import React, { Component } from "react";

class ItemAddFrom extends Component {
  state = {
    label: "",
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        ></input>
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}

export default ItemAddFrom;
