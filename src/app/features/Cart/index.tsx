import { useDispatch } from "react-redux";

import { addToCart } from "./cart.slice";

function Cart() {
  const dispatch = useDispatch();
  return (
    <section className={"container mx-auto"}>
      Cart
      <button onClick={() => dispatch(addToCart("qw"))}>add to cart</button>
    </section>
  );
}

export default Cart;
