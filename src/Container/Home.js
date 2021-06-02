import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
      </div>
    );
  }
}
export default Home;
