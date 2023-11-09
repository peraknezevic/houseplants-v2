import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: Props) => {
  return (
    <section
      className="mb-16 overflow-hidden rounded-xl bg-white drop-shadow-md"
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
