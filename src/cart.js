import React from 'react';

export default class Cart extends React.Component {
  render() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = this.props;
    
     // Calculate the total quantity
     const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <div>
                <strong>{item.name}</strong>
                <br/>
                <p className="card-text" style={{ margin: 0 }}>
                        {item.SKU}
                    </p>
                
                <h4>฿{item.price} </h4>
                <button onClick={() => decreaseQuantity(item.id)} className='btn btn-outline-secondary'>-</button>
                 <span>&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;</span> 
                <button onClick={() => increaseQuantity(item.id)} className='btn btn-outline-secondary'>+</button>
                &nbsp;
                <button onClick={() => removeFromCart(item.id)} className='btn btn-outline-danger'>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total: ฿{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      </div>
    );
  }
}

