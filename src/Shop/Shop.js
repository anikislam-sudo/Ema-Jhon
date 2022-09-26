import React, {  useEffect, useState, } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
   const [products ,setProducts]= useState([]);
   // eslint-disable-next-line no-unused-vars
   const [cart, setCart] = useState([]);
    useEffect(()=>{
        
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
   },[])
    const productAddToCart =(product)=>{
      console.log(product);
      const newCart =[...cart, product];
      setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                products.map(product =><Product
                  key={product.id}
                  product={product}
                  productAddToCart={productAddToCart}
                  ></Product>)
                  
               }
            </div>
            <div className="cart-container">
                <Cart
                 cart={cart}
                ></Cart>
            </div>
        </div>

    );
};

export default Shop;