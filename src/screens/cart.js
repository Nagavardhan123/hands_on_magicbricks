import React from 'react';
// import { useCart } from './CartContent';
import './cart.css'; 
import Navbar from '../components/NavBar';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Cart = () => {
  // const { state, removeFromCart } = useCart();
  // console.log('Cart Items:', state.items);

  // const totalPrice = state.items.reduce((total, item) => {
  //   const new_price = typeof item.new_price === 'number' ? item.new_price : 0;
  //   return total + new_price;
  // }, 0);


  return (
    <div>
        <Navbar />
    {/* <div className="cart-container ">
      <h2 className="cart-heading">Cart</h2>
      <div className="cart-items-container">
        {state.items.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          <ul className="cart-items-list">
            {state.items.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">{typeof item.new_price === 'number' ? `$${item.new_price.toFixed(2)}` : 'N/A'}</p>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-total">
        <p className="total-text">Total Price:</p>
        <p className="total-price">${totalPrice.toFixed(2)}</p>
      </div>
      <Link to="/payment"> 
      <button className="checkout-button" >Proceed to Checkout</button>
      </Link>
    </div> */}
    <div className='container-fluid'>
        <h3>Welcome to the Cart</h3>
    </div>
    <div className=' pt-5 mt-5'>
   <Footer />
    </div>
    </div>
  );
};

export default Cart;