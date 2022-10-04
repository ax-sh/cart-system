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

const ProductItem = ({ key, name, image, price }: any) => {
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
      key={key}
      ref={ref}
      className={clsx(
        "Product-item bg-white/6 rounded-md shadow-xl overflow-hidden transition-all",
        "hover:scale-2"
      )}
    >
      <input className={"hidden"} type={"checkbox"} />
      {/*{enlarge && (*/}
      {/*  <div className={"absolute h-full w-full z-50 flex"}>*/}
      {/*    <FullScreenProductView setEnlarge={setEnlarge} image={image} />*/}
      {/*  </div>*/}
      {/*)}*/}
      <div className={"absolute p-8 shadow-inset-xl z-9"}>
        <h4 className={"text-2xl font-bolder"}>{name}</h4>
        <h4 className={"text-2xl font-bolder"}>{price}</h4>
        <button>add to cart</button>
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
  const {
    data,
    isLoading,
    isError,
    error,
    status,
    originalArgs,
    refetch,
    ...e
  } = useGetProductsQuery(sortBy);

  React.useEffect(() => {
    // refetch();
  }, []);
  if (isLoading) return <>loading</>;
  if (isError) return <pre>{JSON.stringify(error, null, 4)}</pre>;
  console.log(555, data, originalArgs, e);
  return (
    <section className={"container mx-auto "}>
      <div className={"flex justify-end gap-3"}>
        <button onClick={() => setSortBy("recent")}>recent</button>
        <button onClick={() => setSortBy("popular")}>popular</button>
      </div>

      <div className={"grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-6"}>
        {(data || []).map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductView;
