import logofrom from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Gallery } from './gallery';
import {Catalog , CatalogItem }from './catalog';
import Cart from './cart';
import initialCatalog from './initialCatalog';

const App = () => {
  const [catalog, setCatalog] = useState(initialCatalog);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // ตรวจสอบว่าสินค้าอยู่ในตะกร้าแล้วหรือไม่
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // หากสินค้าอยู่ในตะกร้าแล้ว ให้อัปเดตจำนวน
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // หากสินค้าไม่อยู่ในตะกร้า ให้เพิ่มจำนวน 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
//ลบสินค้าในตะกร้า
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };
//เพิ่มปริมาณในตะกร้า
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };
//ลดปริมาณในตะกร้า
  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCart(updatedCart);
  };

  return (
    <div>
      <div className='row'>
      <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand mx-3"><h1>CHAMPION Store</h1></a>
        <form class="d-flex input-group w-auto">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </form>
      </div>
    </nav>
      
      </div>
      <div className='row mt-3'>
        <div className='col-9'>
        <Catalog catalog={catalog} addToCart={addToCart} />
        </div>
        <div className='col'>
        <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
        </div>
      </div>
      
      
    </div>


    //leb
  //   <>
  //  <div className='row text-center'>
  //   <h1 className='text-success'>Sculpture Gallery</h1>
  //  </div>
  //  <Gallery />
  //  </>
  );
}

export default App;
