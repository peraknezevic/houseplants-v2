const CardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="grid grid-cols-2 gap-8 pl-4 md:grid-cols-3 ">{children}</ul>
  );
};

export default CardGrid;
