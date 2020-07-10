import React, { Component } from "react";
import { Button } from "reactstrap";

class Delete extends Component {
  handleClick(item) {
    console.log(item);
    const { items } = this.props;
    item.amount -= 1;
    if (item.amount == 0) {
      console.log(items);
      items.unshift(item);
    }
  }

  render() {
    const { item } = this.props;
    return <Button onClick={() => this.handleClick(item)}></Button>;
  }
}

export default Delete;
