import './App.css';
import React, { Component } from 'react';
import Products from './components/products';
import NavBar from './components/navBar';

class App extends Component {
  state = {
    products: [
        {id: 1, name: "Item-1", value: 0},
        {id: 2, name: "Item-2", value: 0},
        {id: 3, name: "Item-3", value: 0},
        {id: 4, name: "Item-4", value: 0},
        {id: 5, name: "Item-5", value: 0},
    ]
  } 

  render() {
     return (
         <React.Fragment>
           <NavBar totalProducts= { this.state.products.filter(c => c.value > 0).length }/>
           <main className="container">
            <div className='row'>
              <button className="btn btn-primary float-end my-2" onClick= { this.resetProducts } > Reset <i className="bi bi-arrow-clockwise"></i></button> <br />
            </div>
               <Products
               products = { this.state.products }
               onIncrement = { this.handleIncrement }
               onDecrement = { this.handleDecrement }
               onDelete ={ this.handleDelete }
               />
           </main>
         </React.Fragment>
   );
  }

  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...product};
    products[index].value++;
    this.setState({ products });
  };

  handleDecrement = product => {
    if(product.value === 0) return;
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...product};
    products[index].value--;
    this.setState({ products });
  };
  
  handleDelete = productId => {
  let products = this.state.products.filter(item => item.id !== productId);
  this.setState({ products });
  };

  resetProducts = () => {
   const products = [
      {id: 1, name: "Item-1", value: 0},
      {id: 2, name: "Item-2", value: 0},
      {id: 3, name: "Item-3", value: 0},
      {id: 4, name: "Item-4", value: 0},
      {id: 5, name: "Item-5", value: 0},
    ];
    this.setState({ products});
  }

}

export default App;
