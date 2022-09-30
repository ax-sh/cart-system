import React from "react";
import "./App.scss";

import { Nav } from "./Nav";

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
  return <Layout>Cart system</Layout>;
}

export default App;
