import React, { useEffect, useState } from 'react';
import './Cart.css';
import Navbar from '../Navbar/Navbar';
import { Link, router } from '@inertiajs/react';

const Cart = ({ auth, cart }) => {
  // console.log(cart);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  const handleCheckout = () => {
    const localData = localStorage.getItem('temp_cart');
    router.get('/payment')
  }

  const handleDelete = (id) => {
    console.log("Deleting ID:", id);

    router.delete(`/cart/delete/${id}`)

  }

  const [items, setItems] = useState(cart);


  const updateQuantity = (id, amount) => {
    // လက်ရှိ item ကို ရှာတယ်
    const currentItem = items.find(item => item.cart_id === id);
    const newQty = currentItem.qty + amount;

    if (newQty <= 0) return; // ၀ ထက်မငယ်စေရ

    // Database ကို ပို့ပြီး Update လုပ်မယ်
    router.post('/cart/update', {
      cart_id: id,
      qty: newQty
    }, {
      preserveScroll: true,
      onSuccess: () => {

      }
    });
  };


  const grandTotal = items.reduce((acc, item) => {
    return acc + (item.price * item.qty);
  }, 0);

  return (
    <>
      <Navbar auth={auth} />
      <div className="cart-page">
        <div className="cart-header">
          <div className="header-item">PRODUCT</div>
          <div className="header-item">PRICE</div>
          <div className="header-item">QUANTITY</div>
          <div className="header-item">TOTAL</div>
        </div>

        <hr className="divider" />

        <div className="cart-items-container">
          {items.map((item) => (
            <div key={item.cart_id} className="cart-item">
              <div className="product-col">
                <button onClick={() => handleDelete(item.cart_id)} className="remove-btn">🗑️</button>
                <img src={`/product/${item.image}`} alt="car" className="w-20 h-30 object-contain" />
                <div className="product-info">
                  <h1>{item.name}</h1>
                  <p>Color: {item.color}</p>
                  <p>Battery: {item.capacity}</p>
                </div>
              </div>
              <div className="price-col">$ {item.price}</div>
              <div className="qty-col">
                <div className="qty-box">
                  {/* Function ကို current item ရဲ့ id နဲ့ လှမ်းခေါ်ပါ */}
                  <button onClick={() => updateQuantity(item.cart_id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQuantity(item.cart_id, 1)}>+</button>
                </div>
              </div>
              <div className="total-col">${item.price * item.qty}</div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <div className="cart-footer">
          <div className="note-section">
            <label>NOTE</label>
            <textarea placeholder="Add special instructions for your order..."></textarea>
          </div>

          <div className="summary-section">
            <div className="summary-row">
              <span>SUBTOTAL</span>
              {/* Recalculate လုပ်ထားတဲ့ grandTotal ကို သုံးပါ */}
              <span>${grandTotal}</span>
            </div>
            <p className="tax-info">(ONLY IPHONE, IPAD, MACBOOK & I-WATCH)</p>
            <div className="summary-row grand-total">
              <span>GRAND TOTAL</span>
              <span>${grandTotal}</span>
            </div>

            <button onClick={handleCheckout} className="checkout-btn">PROCEED TO CHECKOUT</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;