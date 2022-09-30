import "./App.scss";
import React from "react";

function Nav() {
  return <nav></nav>;
}

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
