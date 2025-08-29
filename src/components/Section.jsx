export function Section({ header, right, children }) {
  return (
    <section className="my-6 w-[95%] mx-auto bg-white rounded-lg border p-4 shadow-sm  flex flex-col gap-4 md:w[70%] lg:w-[50%]">
      <div className="flex items-center justify-between mb-2">
        {header}
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>
      <div className="">{children}</div>
    </section>
  );
}
