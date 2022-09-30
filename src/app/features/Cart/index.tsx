import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart } from "./cart.slice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <section className={"container mx-auto"}>
      {cartItems.map((item, index) => {
        return (
          <div key={index}>
            {item.name} {item.id}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove Item
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Cart;
