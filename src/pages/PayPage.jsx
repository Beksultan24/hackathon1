import React from "react";
import Cards from "react-credit-cards";
// import { Link } from "react-router-dom";
import "react-credit-cards/es/styles-compiled.css";
// import { Button } from "react-bootstrap";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div
          style={{ zIndex: 999, marginTop: 130, marginBottom: 100 }}
          id="PaymentForm"
        >
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: 10,
                width: "50%",
                border: "1px solid black",
                borderRadius: 5,
              }}
            />
            <input
              type="tel"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: 10,
                width: "50%",
                border: "1px solid black",
                borderRadius: 5,
              }}
            />
            <input
              type="tel"
              name="expiry"
              placeholder="Expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: 10,
                width: "50%",
                border: "1px solid black",
                borderRadius: 5,
              }}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              style={{
                marginTop: 10,
                width: "50%",
                border: "1px solid black",
                borderRadius: 5,
              }}
            />
            {/* <Link to="/purchase"> */}
            <button
              className="btn-buy-card"
              style={{
                marginTop: 10,
                width: "50%",
                border: "1px solid black",
                borderRadius: 5,
              }}
            >
              Buy
            </button>
            {/* </Link> */}
          </form>
        </div>
      </>
    );
  }
}
