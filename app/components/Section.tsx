import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: Props) => {
  return (
    <section
      className="mb-8 overflow-hidden rounded-xl bg-white drop-shadow-md dark:bg-zinc-950 md:mb-16"
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
