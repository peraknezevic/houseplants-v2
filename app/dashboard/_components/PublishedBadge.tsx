const PublishedBadge = ({ published }: { published: String }) => {
  return (
    <div
      className={`badge mx-auto h-4 w-4
  ${published === "PUBLISHED" && "bg-green-900"}
  ${published === "DRAFT" && "bg-slate-600"}
  ${published === "REVIEW" && "bg-yellow-600"} 
`}
    ></div>
  );
};

export default PublishedBadge;
