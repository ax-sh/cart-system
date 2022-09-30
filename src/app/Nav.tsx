import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Link, NavLink } from "react-router-dom";
import { useAddToCartMutation } from "./features/Cart/cart.api";

function CartIcon() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const maxCartItemsLength = cartItems.length > 99;
  const cartItemsCount = maxCartItemsLength ? "99+" : cartItems.length;
  const [, { isLoading: isUpdating }] = useAddToCartMutation({
    fixedCacheKey: "shared-update-post",
  });

  return (
    <NavLink to={"/cart"} className={"h-full relative w-10"}>
      <ShoppingCartIcon color={"#fff"} height={"100%"} />
      {/*<span className="flex h-3 w-3">*/}
      {/*  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>*/}
      {/*  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>*/}
      {/*</span>*/}

      <div
        className={clsx(
          "inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 bg-[#e90b0b]",
          "font-bold",
          "text-white bg-red",
          "rounded-full",
          "border-1 border-white dark:border-gray-900",
          maxCartItemsLength ? "text-[0.5rem]" : "text-xs",
          isUpdating && "animate-bounce"
          // isUpdating && "animate-pulse "
        )}
      >
        {isUpdating ? "i" : cartItemsCount}
      </div>
    </NavLink>
  );
}

function ProfileImage() {
  const image = "https://source.unsplash.com/random/300x300";
  return (
    <img
      src={image}
      alt={"profile"}
      className={"rounded-full bg-blue border-1 border-white h-10 w-10"}
    />
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
        <div className={"h-full gap-10 flex justify-between"}>
          <CartIcon />
          <ProfileImage />
        </div>
      </div>
    </nav>
  );
}
