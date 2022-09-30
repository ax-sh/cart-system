import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

function CartIcon(props: React.ComponentPropsWithoutRef<"button">) {
  const cartItemsCount = 60;
  return (
    <button className={"relative"} {...props}>
      <ShoppingCartIcon color={"#fff"} height={"100%"} />

      <div
        className={clsx(
          "inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6",
          "text-xs font-bold",
          "text-white bg-red",
          "rounded-full",
          "border-2 border-white dark:border-gray-900"
        )}
      >
        {cartItemsCount}
      </div>
    </button>
  );
}

export function Nav() {
  return (
    <nav className={"h-[10vh] overflow-hidden flex justify-end p-6 shadow-xl"}>
      <CartIcon />
    </nav>
  );
}
