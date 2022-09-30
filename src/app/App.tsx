import React from "react";
import "./App.scss";

import { Nav } from "./Nav";
import Cart from "./features/Cart";

function Footer() {
  return <footer></footer>;
}

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
