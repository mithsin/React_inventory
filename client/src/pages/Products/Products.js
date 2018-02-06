import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import {Productform, Productformbody} from "../../components/productForm";
import {Productform} from "../../components/ProductForm";
import "./product.css"


class Products extends Component {
  state = {
    products: [],
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
  };

  componentDidMount() {
    this.loadProducts();
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

  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProducts())
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
    if (this.state.name) {
      API.saveProduct({
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
        .then(res => this.props.history.push('/products/'+ res.data._id))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Productform>
          <h2>PRODUCTS INFO</h2>
          <div className="productBlock">
            <form>
            <div className="half_block">
              <p>Name : </p>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
            </div>
            <div className="half_block">
              <p>Image : </p>
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="image "
              />
            </div>
            <div className="of_block">
                <p className="full_length">shipping Weight:</p>
                <Input
                  className="num_input"
                  value={this.state.shipping_weight}
                  onChange={this.handleInputChange}
                  name="shipping_weight"
                  placeholder="#"
                />
            </div>
            <div className="of_block">
                <p className="full_length">Actual Weight</p>
                <Input
                  className="num_input"
                  value={this.state.actual_weight}
                  onChange={this.handleInputChange}
                  name="actual_weight"
                  placeholder="#"
                />
            </div>
            <div className="of_block">
              <p>Color : </p>
              <Input
                value={this.state.color}
                onChange={this.handleInputChange}
                name="color"
                placeholder="color"
              />
            </div>
            <div className="of_block">
              <p> Carton/order </p>
              <Input
                className="num_input"
                value={this.state.cartons}
                onChange={this.handleInputChange}
                name="cartons"
                placeholder="#"
              />
            </div>
            <div className="half_block">
              <p>Package width x height x depth</p>
                  <Input
                  className="whd"
                  value={this.state.pkg_width}
                  onChange={this.handleInputChange}
                  name="pkg_width"
                  placeholder="#"
                  />
                  <Input
                  className="whd"
                  value={this.state.pkg_height}
                  onChange={this.handleInputChange}
                  name="pkg_height"
                  placeholder="#"
                  />
                  <Input
                  className="whd"
                  value={this.state.pkg_depth}
                  onChange={this.handleInputChange}
                  name="pkg_depth"
                  placeholder="#"
                  />
            </div>
            <div className="half_block">
              <p>Actual width x height x depth</p>
                  <Input
                  className="whd"
                  value={this.state.actual_width}
                  onChange={this.handleInputChange}
                  name="actual_width"
                  placeholder="#"
                  />
                  <Input
                  className="whd"
                  value={this.state.actual_height}
                  onChange={this.handleInputChange}
                  name="actual_height"
                  placeholder="#"
                  />
                  <Input
                  className="whd"
                  value={this.state.actual_depth}
                  onChange={this.handleInputChange}
                  name="actual_depth"
                  placeholder="#"
                  />
            </div>
            <div className="ot_block">
            <p>Shelf Length : </p>
            <Input
              className="num_input"
              value={this.state.shelf_length}
              onChange={this.handleInputChange}
              name="shelf_length"
              placeholder="inches"
            />
            </div>
            <div className="ot_block">
            <p>Shelf Width</p>
            <Input
              className="num_input"
              value={this.state.shelf_width}
              onChange={this.handleInputChange}
              name="shelf_width"
              placeholder="inches"
            />
            </div>
            <div className="ot_block">
            <p>Inches Between Shelf</p>
            <Input
              className="num_input"
              value={this.state.inches_between_shelf}
              onChange={this.handleInputChange}
              name="inches_between_shelf"
              placeholder="inches"
            />
            </div>
            <Input
              value={this.state.materials}
              onChange={this.handleInputChange}
              name="materials"
              placeholder="materials "
            />
            <TextArea
              value={this.state.product_description}
              onChange={this.handleInputChange}
              name="product_description"
              placeholder="product_description "
            />
            <TextArea
              value={this.state.product_specification}
              onChange={this.handleInputChange}
              name="product_specification"
              placeholder="product_specification "
            />
            <Input
              value={this.state.feature_1}
              onChange={this.handleInputChange}
              name="feature_1"
              placeholder="feature_1 "
            />
            <Input
              value={this.state.feature_2}
              onChange={this.handleInputChange}
              name="feature_2"
              placeholder="feature_2 "
            />
            <Input
              value={this.state.feature_3}
              onChange={this.handleInputChange}
              name="feature_3"
              placeholder="feature_3 "
            />
            <TextArea
              value={this.state.care_instructions}
              onChange={this.handleInputChange}
              name="care_instructions"
              placeholder="care_instructions "
            />
            <Input
              value={this.state.assembly_required}
              onChange={this.handleInputChange}
              name="assembly_required"
              placeholder="assembly_required "
            />
            <div className="input_block">
            <Input
              className="num_input2"
              value={this.state.wholesale_price}
              onChange={this.handleInputChange}
              name="wholesale_price"
              placeholder="wholesale_price "
            />
            </div>
            <div className="input_block">
            <Input
              className="num_input2"
              value={this.state.retail_price}
              onChange={this.handleInputChange}
              name="retail_price"
              placeholder="retail_price "
            />
            </div>
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Product
              </FormBtn>
              <div>  </div>
            </form>
          </div>
      </Productform>
    );
  }
}

export default Products;
