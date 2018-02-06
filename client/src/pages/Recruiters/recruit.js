import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";
import {usercard, usercardbody} from "../../components/userCard";
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

  // copyinfonote = event => {
  //   <usercard onclick={() => this.getUser(user._id)} />
  //   $(this).on("click", ()=>{
  //     {user.name}
  //   })
  // }

  render() {
    return (
    <div>
      <div className="col-md-8 col-sm-12">
        {this.state.users.length ? (
          <usercard className="usercard">
            {this.state.users.map(user => (
              <usercardbody className="usercardbody" key={user._id}>
                <img className="student-img" src={user.userImage} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p><a href={user.resume}>{user.resume}</a></p>
                <p>{user.bio}</p>
              </usercardbody>
            ))}
          </usercard>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
      <div className="col-md-4 col-sm-12">
      <Jumbotron>
        <h1>Users On My List</h1>
      </Jumbotron>
        // <h2>TAKE NOTES HERE<H2>
        // this.copyinfonote(this.state.name)
        // <TextArea />
        // <FormBtn
        //   onClick={this.##}
        // >
        //   Submit
        // </FormBtn>
      </div>
    </div>
    );
  }
}

export default Recruiters;
