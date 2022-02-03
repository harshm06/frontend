import React, { Component } from "react";

class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: {
        userID: "",
        id: "",
        title: "",
        body: "",
      },
      done: false,
    };
  }
  componentDidMount() {
    let id = this.props["match"]["params"]["id"];
    // console.log(id);
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          resp: {
            userID: data.userId,
            id: data.id,
            title: data.title,
            body: data.body,
          },
          done: true,
        });
      });
  }
  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <h3>Post Details</h3>
        {!this.state.done && <div>LOADING.....</div>}
        {this.state.done && (
          <div>
            <h3>ID: {this.state.resp.id}</h3>
            <h4>UserID: {this.state.resp.userID}</h4>
            <h5>Title: {this.state.resp.title}</h5>
            <p>Body: {this.state.resp.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ShowPost;
