import { ModalDaisy } from "../ModalDaisy";
import clsx from "clsx";
type TCallToAction = {
  className?: string;
};
export const CallToAction = ({ className }: TCallToAction) => {
  console.log(clsx(className, "py-6"));
  return (
    <section className={clsx(className, "py-24")}>
      <div className="container p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="font-gradient h2-header">Book your cleaning today</h2>
          <p className="subheader text-center mt-4">
            Fast, safe, professional steam cleanig.
          </p>
          <div className="mt-16">
            <ModalDaisy />
          </div>
        </div>
      </div>
    </section>
  );
};
