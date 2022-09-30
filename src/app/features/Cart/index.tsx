import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart } from "./cart.slice";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <section className={"container mx-auto grid grid-cols-3 gap-5"}>
      {cartItems.map((item, index) => {
        return (
          <div
            key={index}
            className={"h-20 rounded-md border-2 border-white p-2"}
          >
            <div className={"flex justify-end"}>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                <XMarkIcon className={"h-5 w-5"} />
              </button>
            </div>
            <div className={"px-5 text-xl"}>
              {item.name} {item.id}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Cart;
