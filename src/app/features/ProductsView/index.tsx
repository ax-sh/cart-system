import { range } from "../../../utils";
import { faker } from "@faker-js/faker";
import React from "react";
import clsx from "clsx";

function generateProduct() {
  const name = faker.commerce.product();
  const image = faker.image.abstract(500, 500, true);
  return { name, image };
}

const ProductItem = ({ name, image }: any) => {
  const [enlarge, setEnlarge] = React.useState(false);
  console.log(enlarge);

  return (
    <div
      className={clsx(
        " bg-white/6 rounded-md shadow-xl overflow-hidden transition-all",
        enlarge
          ? "h-screen fixed top-0 grid place-items-center z-10"
          : "relative h-90"
      )}
      onClick={() => setEnlarge((x) => !x)}
    >
      <input className={"hidden"} type={"checkbox"} />
      <div className={"absolute p-8 shadow-inset-xl"}>
        <h4 className={" text-2xl font-bolder"}>{name}</h4>
      </div>
      <img
        className={"h-full w-full object-cover"}
        alt={"product"}
        src={image}
      />
    </div>
  );
};

const ProductCard = React.memo(ProductItem);

function ProductView() {
  return (
    <section
      className={
        "container mx-auto grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-6"
      }
    >
      {range(100).map((i) => {
        const product = generateProduct();
        return (
          <React.Fragment key={i}>
            <ProductCard name={product.name} image={product.image} />
          </React.Fragment>
        );
      })}
    </section>
  );
}

export default ProductView;
