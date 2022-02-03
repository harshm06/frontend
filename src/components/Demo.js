import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dimple Sharma",
    };
  }

  componentDidMount() {
    this.setState({
      age: 25,
    });
  }

  componentWillUnmount() {}

  updateParent = () => {
    this.props.UpdateParent("argument");
  };

  render() {
    return (
      <div>
        {/* <p> Parent ----------- {this.props.temp} </p> */}
        {/* <button onClick={this.updateParent}>Child Click</button> */}
        <p>{/* <button onClick={this.demoFun}>Change Name</button> */}</p>
      </div>
    );
  }
}

export default Demo;
