"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  addQuantity,
  remQuantity,
  removeFromCart,
} from "@/redux/slices/cartSlice";

const CartItems = () => {
  const cartItems = useSelector((state: CartItems) => state.cart);
  const dispatch = useDispatch();

  // get total price of the shopping cart
  const totalPrice = cartItems
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-2/3 bg-white shadow-md p-5 rounded-3xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center gap-5 text-xl lg:max-w-96">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={512}
                      height={512}
                      className="w-20 p-3"
                      loading="lazy"
                    />
                    {item.title}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Button
                        size="icon"
                        onClick={() => dispatch(remQuantity(item.id))}
                      >
                        <FaMinus />
                      </Button>
                      <span className="px-5">{item.quantity}</span>

                      <Button
                        size="icon"
                        onClick={() => dispatch(addQuantity(item.id))}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    {(item.price * item.quantity).toFixed(2)}&euro;
                  </TableCell>
                  <TableCell>
                    <IoClose
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="w-8 h-8 text-rose-500 cursor-pointer bg-transparent hover:bg-rose-100 rounded-full duration-300 p-1"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-5">
                  There are no products in the shopping cart.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {cartItems.length > 0 && (
        <div className="w-full lg:w-1/3 h-auto">
          <div className="bg-white shadow-md p-5 rounded-3xl">
            <h1 className="text-xl font-bold">Order summary</h1>

            <ul>
              <li className="text-sm">Product cost: {totalPrice}&euro;</li>
              <li className="text-sm">Delivery fee: 0&euro;</li>
            </ul>

            <div className="mt-10 mb-5">
              <h4 className="text-xl font-bold">Total:</h4>
              <p className="text-lg font-semibold">{totalPrice} &euro;</p>
            </div>

            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
