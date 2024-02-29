import CartItems from "@/components/cart/cart-items";
import React from "react";

const CartPage = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-lg font-bold mb-5">My Shopping Cart</h1>

        <CartItems />
      </div>
    </div>
  );
};

export default CartPage;
