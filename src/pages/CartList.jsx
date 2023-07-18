import React from 'react';
import { Link } from 'react-router-dom'
import { Header } from './../component/Header'
import { remove } from '../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartList = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    let totalPrice = 0;

    const removeItems = (productId) => {
      dispatch(remove(productId))
    }

  return (
    <>
      <Header />
      <div className="container" style={{marginTop: '100px'}}>
        <div className="cart-container" style={{marginTop: '100px'}}>
          <h2 className="cart-title">Your Cart</h2>
          <ul className="cart-items">
            {
              cartItems.map((products, index) => {

                totalPrice += products.price;

                return <li className="cart-item" key={index}>
                  <img src={products.image} alt={"Product 1 text"} />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{products.title}</p>
                    <p className="cart-item-price">${products.price}</p>
                  </div>
                  <buttom className="btn btn-danger" onClick={()=>removeItems(products.id)}> Remove Items </buttom>
                </li>
                
              })
            }
            
          </ul>
          <p className="cart-total">Total: ${totalPrice}</p>
          <Link href="#" className="checkout-button">Proceed to Checkout</Link>
        </div>
      </div>

    </>
  )
}

export default CartList