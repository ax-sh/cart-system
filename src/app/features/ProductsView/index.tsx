import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cart.slice";

function ProductView() {
  const dispatch = useDispatch();
  return (
    <section className={"container mx-auto"}>
      <div>Cart</div>
      <div>
        <button onClick={() => dispatch(addToCart("qw"))}>Add to cart</button>
      </div>
    </section>
  );
}

export default ProductView;
