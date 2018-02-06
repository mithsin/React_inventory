import React, { Component } from "react";
import API from "../../utils/API";
// import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import {Usercard, Usercardbody} from "../../components/userCard";
import { Input,  FormBtn } from "../../components/Form";

import "./rec.css"

class Recruiters extends Component {
  state = {
    users: [],
    userImage: "",
    name: "",
    email: "",
    resume: "",
    bio: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, userImage:"",name: "", email: "", resume:"", bio: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
    <div>
      <div className="col-md-8 col-sm-12">
        {this.state.users.length ? (
          <Usercard className="usercard">
            {this.state.users.map(user => (
              <Usercardbody className="usercardbody" key={user._id}>
                <img className="student-img headimg" src={user.userImage} alt={user.name}/>
                <input className="checkit" type="checkbox" />
                <p>{user._id}</p>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <a href={user.resume}><img className="linked tailimg" src="http://pluspng.com/img-png/linkedin-png-linkedin-download-png-png-image-200.png" alt="linked" /></a>
                <p className="textsize">{user.bio}</p>
              </Usercardbody>
            ))}
          </Usercard>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
      <Note />
    </div>
    );
  }
}

class Note extends Component {
  state = {
    Notes: [],
    name:"",
    body: ""
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getNotes()
      .then(res =>
        this.setState({ Notes: res.data, name: "", body: "" })
      )
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadNotes())
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
    if (this.state.body) {
      API.saveNote({
        name: this.state.name,
        body: this.state.body
      })
        .then(res => this.loadNotes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <button className="btn_HM">HOME PAGE</button>
        <Row>
          <Col size="sm-12 md-3">
            <h2 className="sm-12 md-12">TAKE NOTES</h2>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (Optional)"
              />
              <Input
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Note area(required)"
              />
              <FormBtn
                disabled={!(this.state.body)}
                onClick={this.handleFormSubmit}
              >
                Submit Note
              </FormBtn>
            </form>
          </Col>
          <Col size="sm-12 md-3">
          <div className="md-12">
          {this.state.Notes.length ? (
            <List>
              {this.state.Notes.map(Note => (
                <ListItem key={Note._id}>
                    <strong>
                      {Note.name}: {Note.body}
                    </strong>
                  <DeleteBtn onClick={() => this.deleteNote(Note._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recruiters;
