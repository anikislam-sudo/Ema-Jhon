import React, {  useEffect, useState, } from 'react';
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
            <div className="order-summery">
              <h2> Order Summery</h2>
              <p>selected item:{cart.length}</p>
            </div>
        </div>

    );
};

export default Shop;