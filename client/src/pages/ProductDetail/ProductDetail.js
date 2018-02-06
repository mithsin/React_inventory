import React, { Component } from "react";
import API from "../../utils/API";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import {Productform, Productformbody} from "../../components/ProductForm";
import { Link } from "react-router-dom";
import "./productdetail.css"


class ProductDetail extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({
          products: res.data,
          name: "",
          image:"",
          shipping_weight: "",
          actual_weight: "",
          color:"",
          cartons: "",
          pkg_width: "",
          pkg_height: "",
          pkg_depth:"",
          actual_width: "",
          actual_height: "",
          actual_depth: "",
          shelf_length:"",
          shelf_width:"",
          inches_between_shelf: "",
          materials:"",
          product_description:"",
          product_specification:"",
          feature_1: "",
          feature_2: "",
          feature_3: "",
          care_instructions: "",
          assembly_required: "",
          wholesale_price: "",
          retail_price: ""
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
      API.updateProduct(this.props.match.params.id, {
        name: this.state.name,
        image:this.state.image,
        shipping_weight: this.state.shipping_weight,
        actual_weight: this.state.actual_weight,
        color:this.state.color,
        cartons: this.state.cartons,
        pkg_width: this.state.pkg_width,
        pkg_height: this.state.pkg_height,
        pkg_depth:this.state.pkg_depth,
        actual_width: this.state.actual_width,
        actual_height: this.state.actual_height,
        actual_depth: this.state.actual_depth,
        shelf_length:this.state.shelf_length,
        shelf_width:this.state.shelf_width,
        inches_between_shelf: this.state.inches_between_shelf,
        materials:this.state.materials,
        product_description:this.state.product_description,
        product_specification:this.state.product_specification,
        feature_1: this.state.feature_1,
        feature_2: this.state.feature_2,
        feature_3: this.state.feature_3,
        care_instructions: this.state.care_instructions,
        assembly_required: this.state.assembly_required,
        wholesale_price: this.state.wholesale_price,
        retail_price: this.state.retail_price
      })
        .then(res => window.location.reload())
        .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Link to="/">
        <button> Home Page </button>
      </Link>
      <div className="lastCard">
          <Productform>
              <Productformbody>
                <p>coke</p>
                <h2>{this.state.product.name}</h2>
                <p>{this.state.product.email}</p>
                <p><a href={this.state.product.resume}>{this.state.product.resume}</a></p>
                <p>{this.state.product.bio}</p>
              </Productformbody>
          </Productform>
      </div>
      </div>
    );
  }
}

export default ProductDetail;


// <h2>EDIT</h2>
// <div className="productBlock">
//   <form>
//     <Input
//       value={this.state.productImage}
//       onChange={this.handleInputChange}
//       name="productImage"
//       placeholder="productImage (optional)"
//     />
//     <Input
//       value={this.state.name}
//       onChange={this.handleInputChange}
//       name="name"
//       placeholder="name (optional)"
//     />
//     <Input
//       value={this.state.email}
//       onChange={this.handleInputChange}
//       name="email"
//       placeholder="email (optional)"
//     />
//     <Input
//       value={this.state.resume}
//       onChange={this.handleInputChange}
//       name="resume"
//       placeholder="resume (optional)"
//     />
//     <TextArea
//       value={this.state.bio}
//       onChange={this.handleInputChange}
//       name="bio"
//       placeholder="bio (Optional)"
//     />
//     <FormBtn
//       onClick={this.handleFormSubmit}
//     >
//       Submit Product
//     </FormBtn>
//     <div>  </div>
//   </form>
// </div>
