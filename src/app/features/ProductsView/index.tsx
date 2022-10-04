import React, { useCallback, useRef } from "react";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ProductSortBy, useGetProductsQuery } from "./product.api";

function ViewControlWrapper(props: { onClick: () => any }) {
  return (
    <div className={"flex justify-end"}>
      <button onClick={props.onClick}>
        <XMarkIcon height={50} />
      </button>
    </div>
  );
}

function FullScreenProductView({ setEnlarge, image }: any) {
  return (
    <div className={"flex-grow flex flex-col z-20"}>
      <ViewControlWrapper onClick={() => setEnlarge(false)} />
      <div className={"grid grid-cols-12 flex-grow px-5 gap-5"}>
        <img alt={"product"} className={"col-span-5"} src={image} />
        jj
      </div>
    </div>
  );
}

const ProductItem = ({ name, image }: any) => {
  const [enlarge, setEnlarge] = React.useState(false);
  const ref = useRef(null);
  const handler = useCallback(() => {
    console.log("OUTSIDE CLICKED");
  }, [enlarge]);
  useClickAway(
    ref,
    () => {
      handler();
    },
    ["click"]
  );

  return (
    <div
      ref={ref}
      className={clsx(
        "Product-item bg-white/6 rounded-md shadow-xl overflow-hidden transition-all",

        enlarge
          ? "h-screen fixed top-0 left-0 w-full grid place-items-center z-10"
          : "relative h-90"
      )}
    >
      <input className={"hidden"} type={"checkbox"} />
      {enlarge && (
        <div className={"absolute h-full w-full z-50 flex"}>
          <FullScreenProductView setEnlarge={setEnlarge} image={image} />
        </div>
      )}
      <div className={"absolute p-8 shadow-inset-xl"}>
        <h4 className={"text-2xl font-bolder"}>{name}</h4>
      </div>
      <img
        className={clsx(
          enlarge && "filter ",
          "blur-xl h-full w-full object-contain",
          "hover:scale-100 transform"
        )}
        alt={"product"}
        src={image}
        loading={"lazy"}
        onClick={() => setEnlarge((x) => !x)}
      />
    </div>
  );
};

const ProductCard = React.memo(ProductItem);

function ProductView() {
  const [sortBy, setSortBy] = React.useState<ProductSortBy>("recent");
  const { data, isLoading } = useGetProductsQuery(sortBy);
  if (isLoading) return <>loading</>;
  console.log(555, data);
  return (
    <section
      className={
        "container mx-auto grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-6"
      }
    >
      {/*{data.map((i) => {*/}
      {/*  const product = generateProduct();*/}
      {/*  return (*/}
      {/*    <React.Fragment key={i}>*/}
      {/*      <ProductCard name={product.name} image={product.image} />*/}
      {/*    </React.Fragment>*/}
      {/*  );*/}
      {/*})}*/}
    </section>
  );
}

export default ProductView;
