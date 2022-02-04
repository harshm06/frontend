import React, { useState, useEffect } from "react";
import Child from "./Child";
import ShowData from "./ShowData";
import Demo from "./Demo";
import ShowRadio from "./ShowRadio";
import "../css/posts.css";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [temp, setTemp] = useState([10, 1, 5, 4, 6]);
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(true);
  const [tempVar, setTempVar] = useState("Comming from parent");

  useEffect(() => {
    getPosts();
  }, [toggle]);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSort = (val) => {
    let tempArray = [...posts];
    if (val === "id") {
      tempArray.sort((a, b) => (a.id < b.id ? 1 : -1));
    } else if (val === "title") {
      tempArray.sort((a, b) => {
        let a_title = a.title.toUpperCase();
        let b_title = b.title.toUpperCase();

        if (a_title > b_title) return 1;
        else return -1;
      });
    }
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
      <ShowRadio sortFuncParent={onSort} />
      {/* {<Child name={name} handleChange={handleChange} />}
      {name} */}
      <ShowData postsprop={posts} toggleprop={toggle} />
    </div>
  );
};

export default Posts;
