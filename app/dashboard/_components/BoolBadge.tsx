const BoolBadge = ({ bool }: { bool: Boolean }) => {
  return (
    <div
      className={`mx-auto h-4 w-4 rounded-full
    ${bool ? "btn-success" : "btn-warning"}
  `}
    ></div>
  );
};

export default BoolBadge;
