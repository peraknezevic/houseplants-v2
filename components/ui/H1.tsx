const H1 = ({ title }: { title: string }) => {
  return (
    <h1 className="mb-8 text-center text-4xl font-semibold leading-relaxed md:mb-16 md:mt-8 md:text-6xl">
      {title}
    </h1>
  );
};

export default H1;
