import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart } from "./cart.slice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Empty from "../Empty";

function Delete(props: { onClick: () => any }) {
  return (
    <button onClick={props.onClick}>
      <XMarkIcon className={"h-5 w-5"} />
    </button>
  );
}

function CartItem(props: { onClick: () => any; item: any }) {
  return (
    <div className={"h-20 rounded-md border-2 border-white p-2"}>
      <div className={"flex justify-end"}>
        <Delete onClick={props.onClick} />
      </div>
      <div className={"px-5 text-xl"}>
        {props.item.name} {props.item.id}
      </div>
    </div>
  );
}

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <section className={"container mx-auto"}>
      {!cartItems.length && <Empty>Cart Empty</Empty>}
      <div className={"grid grid-cols-3 gap-5"}>
        {cartItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              onClick={() => dispatch(removeFromCart(item.id))}
              item={item}
            />
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
