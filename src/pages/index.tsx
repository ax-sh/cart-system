import { Layout } from "../app/App";
import ProductView from "../app/features/ProductsView";
// import { addToCart } from "../app/features/Cart/cart.slice";
// import { useDispatch } from "react-redux";
import { useAddToCartMutation } from "../app/features/Cart/cart.api";

function Hero() {
  // const dispatch = useDispatch();
  const [apiAddToCart] = useAddToCartMutation();
  return (
    <section className={"container mx-auto py-50"}>
      <div className={"flex flex-col gap-10 items-start"}>
        <h6 className={"text-[#ffd500] text-4xl"}>Classic Yellow Look</h6>
        <button
          className={"bg-[#ffd500] text-[#15151e] px-6 py-2 rounded-md"}
          onClick={() => apiAddToCart({ data: "uo" })}
          // onClick={() => dispatch(addToCart("qw"))}
        >
          Add To cart
        </button>
      </div>
    </section>
  );
}

function Page() {
  return (
    <Layout>
      <Hero />
      <ProductView />
    </Layout>
  );
}
export default Page;
