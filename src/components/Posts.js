import React, { useState, useEffect } from "react";
import Child from "./Child";
import { Link } from "react-router-dom";
import Demo from "./Demo";
import "../css/posts.css";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [temp, setTemp] = useState([10, 1, 5, 4, 6]);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(true);
  const [tempVar, setTempVar] = useState("Comming from parent");

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //

        setPosts(data);
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
  };

  const onSort = () => {
    let tempArray = [...posts];
    tempArray.sort();
    setPosts(tempArray);
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (value) => {
    setName(value);
  };

  const UpdateParent = () => {
    setTempVar("New Value");
  };

  return (
    <div>
      <h1>Post List</h1>
      <Demo temp={tempVar} UpdateParent={UpdateParent} />

      <button
        onClick={onToggle}
        style={{ color: toggle ? "salmon" : "brown" }}
        className=""
      >
        Toggle
      </button>
      <button
        onClick={onSort}
        style={{ color: toggle ? "salmon" : "brown" }}
        className=""
      >
        Sort
      </button>
      {/* {<Child name={name} handleChange={handleChange} />}
      {name} */}
      <table style={{ marginTop: "2rem" }}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Details</th>
          </tr>
          {toggle &&
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Link to={`/showpost/${post.id}`}>
                    <button>Show Details</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
