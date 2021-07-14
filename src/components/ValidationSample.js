import React, { Component } from "react";
import "../styles/ValidatinSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validation: false,
  };

  //handleChange로 input안의 text가 입력되어서 상태가 변경됨.
  handleChage = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });

    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChage}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
