const PlantProfileP = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <p className="px-8 pb-4">
      <span className="font-semibold">{title}: </span>
      {content}
    </p>
  );
};

export default PlantProfileP;
