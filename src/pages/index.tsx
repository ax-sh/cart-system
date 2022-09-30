import { Layout } from "../app/App";
import ProductView from "../app/features/ProductsView";
import { addToCart } from "../app/features/Cart/cart.slice";
import { useDispatch } from "react-redux";
import { useAddToCartMutation } from "../app/features/Cart/cart.api";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from "../app/features/Toast";

function Hero() {
  const dispatch = useDispatch();
  const [apiAddToCart] = useAddToCartMutation({
    fixedCacheKey: "shared-update-post",
  });

  function handleAddToCart() {
    return async () => {
      const req = await apiAddToCart({ data: "uo" });
      //@ts-ignore
      if (!req.error) {
        console.log("[ADD_TO_CART_REQUEST]", req, 7777);
        dispatch(addToCart("qw"));
      }
    };
  }

  return (
    <section className={"container mx-auto py-50"}>
      <div className={"flex flex-col gap-10 items-start"}>
        <h6 className={"text-[#ffd500] text-4xl"}>Classic Yellow Look</h6>
        <button
          className={"bg-[#ffd500] text-[#15151e] px-6 py-2 rounded-md"}
          onClick={handleAddToCart()}
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
      <Toast
        open={true}
        // onOpenChange={}
      >
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild>
          Hello
          {/*<time dateTime={eventDateRef.current.toISOString()}>*/}
          {/*  {prettyDate(eventDateRef.current)}*/}
          {/*</time>*/}
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          Yoooo
          {/*<Button variant="green" size="small">*/}
          {/*  Undo*/}
          {/*</Button>*/}
        </ToastAction>
      </Toast>
    </Layout>
  );
}
export default Page;
