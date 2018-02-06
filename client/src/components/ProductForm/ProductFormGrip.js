import react from "react";


const ProductFormGrip = props => {
  return(
    <div>

    <div>
  )
}



<div className="product_form_grip">
  {this.state.props.length ? (
    <Productform className="product_form_grip">
      {this.state.props.map(prop => (
        <Productformbody className="productformbody" key={prop._id}>
          <img className="student-img" src={prop.productImage} alt={prop.name}/>
          <h2>{prop.name}</h2>
          <p>{prop.email}</p>
          <p><a href={prop.resume}>{prop.resume}</a></p>
          <p>{prop.bio}</p>
        </Productformbody>
      ))}
    </Productform>
  ) : (
    <h3>No Results to Display</h3>
  )}
</div>
