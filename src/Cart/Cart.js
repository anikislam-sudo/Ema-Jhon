import React from 'react';

const Cart = (props) => {
    return (
        <div>
               <h2> Order Summery</h2>
              <p>selected item:{props.cart.length}</p> 
        </div>
    );
};

export default Cart;