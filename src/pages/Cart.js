import React from 'react';

const Cart = () => {
  return (
    <div className='contact-container'>
      <h2>Thank you for your interest in our microgreens!</h2>

      <p>To place an order, you can choose one of the following methods:</p>

      <h4>Optimal Method: Text</h4>
      <p>Text your name, address, the product, and the amount you want to the following number: (555)123-4567</p>
      <p>Example Text Message:</p>
      <ul>
        <li>Name: John Doe</li>
        <li>Address: 123 Green St, Springfield</li>
        <li>Product: Peashoots</li>
        <li>Amount: 2 packs</li>
      </ul>

      <h4>Alternative Method: Call</h4>
      <p>Call us directly to place your order: (555)123-4567</p>

      <p>We'll confirm the order based on availability and provide a total price.</p>
      <p>details about sizes and price.</p>
      <p>details about order times and delivery times.</p>
      <p>We look forward to serving you and ensuring you receive the freshest microgreens for your culinary and health needs. Thank you for choosing us!</p>
    </div>
  )
}

export default Cart;