import React from "react";
import "./App.scss";

import { Nav } from "./Nav";
import Cart from "./features/Cart";

function Footer() {
  return <footer></footer>;
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export default App;
