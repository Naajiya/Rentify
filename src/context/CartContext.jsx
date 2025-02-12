import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContexts = createContext();

function CartContext({ children }) {
  const [cartDetails, setCartDetails] = useState([]); // Store cart data

  const updateCartDetails = async (carId, updatedItem) => {
    console.log(updatedItem)
    const reqBody = {
      productId: updatedItem._id,
      quantity: updatedItem.quantity,
      days: updatedItem.days,
    };

    try {
      const result = await axios.put(
        `http://localhost:3000/change-cart/${carId}`,
        reqBody,
        {
          headers: { Authorization: sessionStorage.getItem("token") },
        }
      );

      console.log('Result of PUT method:', result.data);
    } catch (err) {
      console.error("Error updating cart details:", err);
    }
  };

  const updateTotalAmount = (item) => ({
    ...item,
    total: (item.productId?.price || 0) * (item.quantity || 1) * (item.days || 1),
  });

  const incrementHandler = (proId) => {
    setCartDetails((prevCart) =>
      prevCart.map((item) =>
        item._id === proId
          ? updateTotalAmount({ ...item, quantity: (item.quantity || 1) + 1 })
          : item
      )
    );

    const updatedItem = cartDetails.find((item) => item._id === proId);
    if (updatedItem) {
      updateCartDetails(proId, updateTotalAmount({ ...updatedItem, quantity: updatedItem.quantity + 1 }));
    }
  };

  const decreamentHanldler = (proId) => {
    setCartDetails((prevCart) =>
      prevCart.map((item) =>
        item._id === proId
          ? updateTotalAmount({
            ...item,
            quantity: Math.max((item.quantity || 1) - 1, 1),
          })
          : item
      )
    );

    const updatedItem = cartDetails.find((item) => item._id === proId);
    if (updatedItem) {
      updateCartDetails(proId, updateTotalAmount({ ...updatedItem, quantity: Math.max(updatedItem.quantity - 1, 1) }));
    }
  };

  const daysIncrement = (proId) => {
    setCartDetails((prevCart) =>
      prevCart.map((item) =>
        item._id === proId
          ? updateTotalAmount({ ...item, days: (item.days || 1) + 1 })
          : item
      )
    );

    const updatedItem = cartDetails.find((item) => item._id === proId);
    if (updatedItem) {
      updateCartDetails(proId, updateTotalAmount({ ...updatedItem, days: updatedItem.days + 1 }));
    }
  };

  const daysDecreament = (proId) => {
    setCartDetails((prevCart) =>
      prevCart.map((item) =>
        item._id === proId
          ? updateTotalAmount({
              ...item,
              days: Math.max((item.days || 2) - 1, 2), // Decrease by 1, ensuring min is 2
            })
          : item
      )
    );

    const updatedItem = cartDetails.find((item) => item._id === proId);
  if (updatedItem) {
    updateCartDetails(proId, updateTotalAmount({ 
      ...updatedItem, 
      days: Math.max(updatedItem.days - 1, 2) // Ensure min is 2
    }));
  }
  };

  return (
    <CartContexts.Provider
      value={{
        cartDetails,
        setCartDetails,
        incrementHandler,
        decreamentHanldler,
        daysIncrement,
        daysDecreament,
      }}
    >
      {children}
    </CartContexts.Provider>
  );
}

export default CartContext;
