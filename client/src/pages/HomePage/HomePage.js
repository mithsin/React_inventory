import React, { Component } from "react";
// import API from "../../utils/API";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import {Userform, Userformbody} from "../../components/userForm";
import { Link } from "react-router-dom";
import "./homepage.css"


class HomePage extends Component {

  render() {
    return (
      <div className="homepage">
        <Link to="/studentlogin">
        <button className="btn_HM">STUDENT</button>
        </Link>
        <Link to="/recruiterlogin">
        <button className="btn_HM">RECRUITERS</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
