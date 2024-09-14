const Section = ({
  children,
  id = "",
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <section
      className="mb-8 rounded-xl bg-white pt-8 font-serif text-xl font-light drop-shadow-md dark:bg-zinc-950 md:mb-16"
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
