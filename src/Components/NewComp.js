import React, { Component } from "react";
import bellA from "./bellA.png";
import bellB from "./bellB.png";

class NewComp extends Component {
  styles = {
    fontStyle: "italic",
    color: "purple"
  };

  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to Simplilearn",
      sub: "Subscribe",
      imgURL: bellA
    };
  }

  Buttonchange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed"
    });
  };

  imageChange = () => {
    this.setState({
      imgURL: bellB,
      message: "Thank you! Happy learning"
    });
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p />
        <img
          style={{ width: "30px", height: "30px" }}
          src={this.state.imgURL}
          onClick={this.imageChange}
          alt=""
        />
      </div>
    );
  }
}

export default NewComp;
