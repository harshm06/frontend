import React, { Component } from "react";
import "../css/converter.css";

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["INR", "EUR", "USD"],
      inpval: 0,
      op1: "",
      op2: "",
      res: 0,
      exchangevalues: {
        INR: 1,
        EUR: 0.013,
        USD: 0.015,
      },
    };
  }
  componentDidMount() {
    this.setState({
      op1: this.state.list[0],
      op2: this.state.list[0],
    });
  }
  changeDrop = (e) => {
    this.setState({
      op2: e.target.value,
    });
  };

  changeDrop1 = (e) => {
    this.setState({
      op1: e.target.value,
    });
  };

  changeinp = (e) => {
    this.setState({
      inpval: e.target.value,
    });
  };

  calculate = () => {
    let result =
      (this.state.inpval * this.state.exchangevalues[this.state.op2]) /
      this.state.exchangevalues[this.state.op1];

    this.setState({
      res: result,
    });
  };

  calculateval = () => {};
  render() {
    var message = "You selected " + this.state.op2;
    return (
      <div>
        <h3>Currency Converter</h3>
        <input
          id="inpvalue"
          type="number"
          value={this.state.inpval}
          onChange={this.changeinp}
        ></input>
        <br />
        <select value={this.state.op1} onChange={this.changeDrop1}>
          {this.state.list.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <br />
        <select value={this.state.op2} onChange={this.changeDrop}>
          {this.state.list.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <br />
        <button onClick={this.calculate}>Submit</button>
        {/* {message} */}
        <br />
        <p>OUTPUT IS: {this.state.res}</p>
      </div>
    );
  }
}

export default Converter;
