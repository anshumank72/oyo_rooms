import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import AdvertisingBanner from "../Components/AdvertisingBanner";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <AdvertisingBanner />
      </div>
    );
  }
}
export default Home;
