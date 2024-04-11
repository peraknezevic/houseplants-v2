import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
};

export default function Section({ children, id = "" }: SectionProps) {
  return (
    <section
      className="mb-8 overflow-hidden rounded-xl bg-white drop-shadow-md md:mb-16 dark:bg-zinc-950"
      id={id}
    >
      {children}
    </section>
  );
}
