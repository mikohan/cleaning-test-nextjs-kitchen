type CallToActionProp = {
  color?: string;
};
export const CallToAction = ({ color }: CallToActionProp) => {
  let btnClass = "btn";
  btnClass = color === "yellow" ? "btn-yellow" : "btn";
  return (
    <section className="bg-linear-to-b from-white to-couchLightBlue py-24">
      <div className="container p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="font-gradient h2-header">Book your cleaning today</h2>
          <p className="subheader text-center mt-4">
            Fast, safe, professional steam cleanig.
          </p>
          <div className="mt-8">
            <button className={btnClass}>Schedule Cleaning</button>
          </div>
        </div>
      </div>
    </section>
  );
};
