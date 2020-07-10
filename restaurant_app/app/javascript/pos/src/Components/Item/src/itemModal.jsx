import React, { Component } from "react";

class ItemModal extends Component {
  state = {
    amount: 0,
    currentItem: this.props.item,
  };

  increment = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  handleDeleteItem = (amount) => {
    console.log(amount);
  };

  // addItem = () => {
  //   const currentItem = {};
  //   currentItem.id = this.props.itemID;
  //   currentItem.amount = this.state.amount;
  //   currentItem.name = this.props.itemName;
  //   currentItem.price = this.props.itemPrice;
  //   this.setState({ currentItem });
  //   if (currentItem.amount === 0) {
  //     return;
  //   } else {
  //     this.state.listOfTable[this.props.tableID].items.push(currentItem);
  //   }
  //   this.props.handleModal();
  // };

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

export default ItemModal;
