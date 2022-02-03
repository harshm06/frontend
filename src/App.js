// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import ShowPost from "./components/ShowPost";
import Converter from "./components/Converter";

function App() {
  return (
    <Router>
      <div className="App">
        App Component
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/posts" component={Posts}></Route>
          <Route exact path="/converter" component={Converter}></Route>
          <Route exact path="/showpost/:id" component={ShowPost}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
