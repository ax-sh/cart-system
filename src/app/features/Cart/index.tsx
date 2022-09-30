import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart } from "./cart.slice";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Delete(props: { onClick: () => any }) {
  return (
    <button onClick={props.onClick}>
      <XMarkIcon className={"h-5 w-5"} />
    </button>
  );
}

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <section className={"container mx-auto "}>
      <div className={"grid grid-cols-3 gap-5"}>
        {cartItems.map((item, index) => {
          return (
            <div
              key={index}
              className={"h-20 rounded-md border-2 border-white p-2"}
            >
              <div className={"flex justify-end"}>
                <Delete onClick={() => dispatch(removeFromCart(item.id))} />
              </div>
              <div className={"px-5 text-xl"}>
                {item.name} {item.id}
              </div>
            </div>
          );
        })}
      </div>
      <div className={"flex justify-end"}>
        <button
          className={"border-white border-2 px-12 py-2 rounded-md text-4xl"}
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

export default Cart;
