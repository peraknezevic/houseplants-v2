const BoolBadge = ({ bool }: { bool: Boolean }) => {
  return (
    <div
      className={`mx-auto h-4 w-4 rounded-full 
    ${bool ? "bg-green-700" : "bg-red-800"}
  `}
    ></div>
  );
};

export default BoolBadge;
