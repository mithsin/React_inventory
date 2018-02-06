import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {Usercard} from "../../components/userCard";


class SignInPage extends Component {
  state = {
    recruiters: [],
    name: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    this.loadRecru();
  }

  loadRecru = () => {
    API.getRecrus()
      .then(res =>
        this.setState({ recruiters: res.data, name: "", email: "", password:""})
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      API.saveRecru({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
        .then((data) =>{
            console.log("then this is " + this.state.name);
            console.log(JSON.stringify(this.state.recruiters));
        })
        .catch(err => console.log(err));
    }
  };

  showData = (data) => {
    const {this.state.recruiters: name}
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.email) {
  //     API.saveRecru({
  //       name: this.state.name,
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //       .then((data) =>{
  //           console.log("then this is " + this.state.name);
  //           console.log(JSON.stringify(this.state.recruiters));
  //       })
  //       .catch(err => console.log(err));
  //   }
  // };


  render() {
    return (
<Usercard>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <TextArea
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Usercard>
    );
  }
}

export default SignInPage;
