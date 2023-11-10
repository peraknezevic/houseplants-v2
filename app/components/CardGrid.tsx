const CardGrid = ({ children }: { children: React.ReactNode }) => {
  return <ul className="grid grid-cols-3 gap-8 ">{children}</ul>;
};

export default CardGrid;
