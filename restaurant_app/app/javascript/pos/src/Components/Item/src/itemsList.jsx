import React, { Component } from "react";
import { Table } from "reactstrap";
import Delete from "./deleteButton";

class ItemsList extends Component {
  state = {
    show: false,
  };

  showTableNumber() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { itemsInTable, amount, tableNumber } = this.props;
    let total = [];
    let list = itemsInTable.map((item) => {
      let totalPricePerItem;
      totalPricePerItem = amount * item.price;
      total.push(totalPricePerItem);

      return (
        <tbody key={item.id} style={{ color: "black" }}>
          <tr>
            <td>
              <a target="_blank" href={item.cfa_url}>
                {item.name}
              </a>
            </td>
            <td>{amount}</td>
            <td>£{item.price}</td>
            <td>£{totalPricePerItem}</td>
            <td>
              <Delete items={itemsInTable} item={item} id={item.id} />
            </td>
          </tr>
        </tbody>
      );
    });

    return (
      <div style={{ color: "black" }}>
        {this.state.show ? null : (
          <Table>
            <thead>
              <tr>
                <th>Table number {tableNumber}</th>
              </tr>
            </thead>
          </Table>
        )}
        <Table striped responsive hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Price per Item</th>
              <th>Total Price of Item</th>
              <th>Total Price</th>
            </tr>
          </thead>
          {list}
          <thead>
            <tr>
              <th>Total Price</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{(total = total.reduce((a, b) => a + b, 0))}</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default ItemsList;
