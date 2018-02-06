import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class UserDetail extends Component {
  state = {
    users: [],
    _id:""
    userImage: "",
    name: "",
    email: "",
    resume: "",
    bio: ""
  };

  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({
          users: res.data,
          _id:"",
          userImage: "",
          password:'',
          name: "",
          email: "",
          resume: "",
          bio: ""
        })
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
      API.updateUser({
        _id: this.state._id,
        userImage: this.state.userImage,
        name: this.state.name,
        email: this.state.email,
        resume: this.state.resume,
        bio: this.state.bio
      })
        .then(res => res.loadUsers())
        .catch(err => console.log(err));
  };



  render() {
    return (
      <Container fluid>
      <div className="col-md-12 col-sm-12">
          <usercard className="usercard">
              <usercardbody className="usercardbody">
                <img className="student-img" src={this.state.userImage} alt={this.state.name}/>
                <h2>{this.state.name}</h2>
                <p>apple</p>
                <p>{this.state.email}</p>
                <p><a href={this.state.resume}>{this.state.resume}</a></p>
                <p>{this.state.bio}</p>
              </usercardbody>
            )}
          </usercard>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.userImage}
                onChange={this.handleInputChange}
                name="userImage"
                placeholder="userImage (required)"
              />
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
              <Input
                value={this.state.resume}
                onChange={this.handleInputChange}
                name="resume"
                placeholder="resume (required)"
              />
              <TextArea
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="bio (Optional)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
              <div>Nothing</div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserDetail;

        // .then(res => this.loadUsers())

  // state = {
  //   users: [],
  //   userImage: "",
  //   password:"",
  //   name: "",
  //   email: "",
  //   resume: "",
  //   bio: ""
  // };

  // componentDidMount() {
  //   this.loadUsers();
  // }
  //
  // loadUsers = () => {
  //   API.getUsers()
  //     .then(res =>
  //       this.setState({
  //         users: res.data,
  //         userImage: "",
  //         password:'',
  //         name: "",
  //         email: "",
  //         resume: "",
  //         bio: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };
