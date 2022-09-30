function Empty({ children }: any) {
  return (
    <section className={"grid place-items-center h-100 items-center"}>
      <div className={"text-8xl text-center"}>
        {children ? children : "Empty"}
      </div>
    </section>
  );
}
export default Empty;
