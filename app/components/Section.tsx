import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: Props) => {
  return (
    <section
      className="mb-8 overflow-hidden rounded-xl bg-white drop-shadow-md md:mb-16"
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
