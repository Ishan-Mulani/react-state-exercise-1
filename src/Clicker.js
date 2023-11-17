import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    let randNum = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: randNum });
  }
  render() {
    let element;
    if (this.state.num == 7) {
      element = <h1>You Win !!!</h1>;
    } else {
      element = <button onClick={this.handleClick}>Generate</button>;
    }
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {element}
      </div>
    );
  }
}

export default Clicker;
