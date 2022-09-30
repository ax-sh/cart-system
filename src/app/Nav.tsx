import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Link, NavLink } from "react-router-dom";

function CartIcon() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const maxCartItemsLength = cartItems.length > 99;
  const cartItemsCount = maxCartItemsLength ? "99+" : cartItems.length;
  return (
    <NavLink to={"/cart"} className={"h-full relative w-10"}>
      <ShoppingCartIcon color={"#fff"} height={"100%"} />

      <div
        className={clsx(
          "inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 bg-red-600",
          "font-bold",
          "text-white bg-red",
          "rounded-full",
          "border-2 border-white dark:border-gray-900",
          maxCartItemsLength ? "text-[0.5rem]" : "text-xs"
        )}
      >
        {cartItemsCount}
      </div>
    </NavLink>
  );
}

export function Nav({ className }: React.ComponentPropsWithoutRef<"main">) {
  return (
    <nav
      className={clsx(
        className,
        "overflow-hidden flex items-center p-6 shadow-xl"
      )}
    >
      <div className={"container mx-auto flex justify-between"}>
        <Link to={"/"} className={"text-3xl no-underline text-white"}>
          Cart System
        </Link>
        <CartIcon />
      </div>
    </nav>
  );
}
