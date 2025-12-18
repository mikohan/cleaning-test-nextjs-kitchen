import { ModalDaisy } from "../ModalDaisy";
type TCallToAction = {
  className?: string;
};
export const CallToAction = ({ className }: TCallToAction) => {
  return (
    <section className={className}>
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
