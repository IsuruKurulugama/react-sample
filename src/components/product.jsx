import React, { Component } from "react";

class Prodcut extends Component {

  render() {
    return (
      <div className="row">
        <div className="col">
          <span className="mx-2">{this.props.product.name}</span>
        </div>
        <div className="col"></div>
        <div className="col">
          <button onClick={ () => this.props.onIncrement(this.props.product) } className="btn btn-light btn-sm mx-2 my-2"><i className="bi bi-plus"></i></button>
          <span className={this.getBadgeClasses()}>{this.props.product.value}</span>
          <button onClick={ () => this.props.onDecrement(this.props.product) } className="btn btn-light btn-sm mx-2 my-2"><i className="bi bi-dash"></i></button>
          <button onClick={ () => this.props.onDelete(this.props.product.id) } className="btn btn-danger btn-sm mx-2 my-2"><i className="bi bi-trash3"></i></button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge bg-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Prodcut;
