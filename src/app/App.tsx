import React from "react";
import "./App.scss";

import { Nav } from "./Nav";
import clsx from "clsx";

function Footer() {
  return <footer></footer>;
}

export function Layout({
  children,
  fixedNav = true,
}: React.PropsWithChildren<{ fixedNav?: boolean }>) {
  return (
    <>
      <Nav className={clsx(fixedNav && "fixed w-full", "h-[10vh] z-200")} />
      <main className={clsx(fixedNav && "pt-[10vh]")}>{children}</main>
      <Footer />
    </>
  );
}
