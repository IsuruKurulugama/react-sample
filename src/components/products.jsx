import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    
    render() { 
        return (
            <div>
               {this.props.products.map(item => 
               <Product 
               key={item.id} 
               product= { item } 
               onDelete = {this.props.onDelete}
               onIncrement = {this.props.onIncrement}
               onDecrement = {this.props.onDecrement} />)}
            </div>
        );
    }

}
 
export default Products;