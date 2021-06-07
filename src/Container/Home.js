import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import AdvertisingBanner from "../Components/AdvertisingBanner";
import MailForm from "../Components/MailForm";
import OyoExpanding from "../Components/OyoExpanding";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <AdvertisingBanner />
        <MailForm />
        <OyoExpanding />
      </div>
    );
  }
}
export default Home;
