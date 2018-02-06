import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  updateProduct: function(id, productData){
    return axios.put("/api/products/" + id, productData);
  },
  // Gets all products
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the product with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the product with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a product to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  }

};
